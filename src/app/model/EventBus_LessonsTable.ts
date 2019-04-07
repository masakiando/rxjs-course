export interface Lesson {
    id: string;
    description: string;
    seqNo: number;
    duration: string;
    url?: string;
    tags?: string;
    pro?: boolean;
    longDescription?: string;
    courseId?: string;
    videoUrl?: string;
}

export const EventBus_Lessons = [
  {
    id: 1,
    description: ' Setting Up an Angular Development Environment',
    duration: '5:00',
  },
  {
    id: 2,
    description: ' Running the the Lessons Code',
    duration: '7:00',
  },
  {
    id: 3,
    description: 'Build Your First App - Hello World Step By Step',
    duration: '9:00',
  },
];
