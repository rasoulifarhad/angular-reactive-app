export interface Lesson {
  id: string;
  description: string;
  seqNo: number;
  duration: string;
  completed: boolean,
  url?: string;
  tags?: string;
  pro?: boolean;
  longDescription?: string;
  courseId?: string;
  videoUrl?: string;
}
