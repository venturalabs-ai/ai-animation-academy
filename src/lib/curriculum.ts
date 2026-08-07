export type Lesson = {
  id: string;
  title: string;
  minutes: number;
};

export function totalMinutes(lessons: Lesson[]): number {
  return lessons.reduce((sum, l) => sum + Math.max(0, l.minutes), 0);
}

export function slugify(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function validateLesson(lesson: Lesson): string[] {
  const errors: string[] = [];
  if (!lesson.id) errors.push("id required");
  if (!lesson.title?.trim()) errors.push("title required");
  if (!(lesson.minutes > 0)) errors.push("minutes must be > 0");
  return errors;
}
