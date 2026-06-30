from pydantic import BaseModel, EmailStr, Field


class ServiceItem(BaseModel):
    id: str
    title: str
    description: str
    icon: str
    features: list[str]


class ProjectItem(BaseModel):
    id: str
    category: str
    title: str
    description: str
    client: str
    date: str
    image: str


class TeamMember(BaseModel):
    id: str
    name: str
    role: str
    experience: str
    bio: str
    image: str


class TestimonialItem(BaseModel):
    id: str
    name: str
    company: str
    text: str
    date: str


class StatItem(BaseModel):
    value: str
    label: str
    description: str


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=30)
    service: str | None = Field(default=None, max_length=100)
    message: str = Field(min_length=10, max_length=2000)
    lang: str | None = Field(default="uk", max_length=5)


class ContactResponse(BaseModel):
    success: bool
    message: str
    id: int | None = None
