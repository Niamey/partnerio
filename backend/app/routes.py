import aiosqlite
from fastapi import APIRouter, Query

from app.config import settings
from app.data import get_content, get_message, normalize_lang
from app.models import (
    ContactRequest,
    ContactResponse,
    ProjectItem,
    ServiceItem,
    StatItem,
    TeamMember,
    TestimonialItem,
)

router = APIRouter(prefix="/api")


@router.get("/services", response_model=list[ServiceItem])
async def get_services(lang: str = Query(default="uk")) -> list[ServiceItem]:
    return [ServiceItem(**s) for s in get_content(normalize_lang(lang), "services")]


@router.get("/projects", response_model=list[ProjectItem])
async def get_projects(lang: str = Query(default="uk")) -> list[ProjectItem]:
    return [ProjectItem(**p) for p in get_content(normalize_lang(lang), "projects")]


@router.get("/team", response_model=list[TeamMember])
async def get_team(lang: str = Query(default="uk")) -> list[TeamMember]:
    return [TeamMember(**m) for m in get_content(normalize_lang(lang), "team")]


@router.get("/testimonials", response_model=list[TestimonialItem])
async def get_testimonials(lang: str = Query(default="uk")) -> list[TestimonialItem]:
    return [TestimonialItem(**t) for t in get_content(normalize_lang(lang), "testimonials")]


@router.get("/stats", response_model=list[StatItem])
async def get_stats(lang: str = Query(default="uk")) -> list[StatItem]:
    return [StatItem(**s) for s in get_content(normalize_lang(lang), "stats")]


@router.post("/contact", response_model=ContactResponse)
async def submit_contact(data: ContactRequest) -> ContactResponse:
    lang = normalize_lang(data.lang)
    try:
        async with aiosqlite.connect(settings.database_path) as db:
            cursor = await db.execute(
                """
                INSERT INTO contact_requests (name, email, phone, service, message)
                VALUES (?, ?, ?, ?, ?)
                """,
                (data.name, data.email, data.phone, data.service, data.message),
            )
            await db.commit()
            return ContactResponse(
                success=True,
                message=get_message(lang, "contact_success"),
                id=cursor.lastrowid,
            )
    except Exception as exc:
        return ContactResponse(
            success=False,
            message=get_message(lang, "contact_error"),
            id=None,
        )

