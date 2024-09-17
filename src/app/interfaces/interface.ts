export interface Posts {
  posts:    Post[];
  comments: Comment[];
}

export interface Comment {
  id:           number;
  post_id:      number;
  author:       string;
  author_photo: string;
  content:      string;
  created_at:   Date;
}

export interface Post {
  id:           number;
  title:        string;
  image:        string;
  description:  string;
  tags:         string[];
  created_at:   Date;
  last_read_at: Date;
  comments:     number;
  likes:        number;
  views:        number;
  category:     string;
  author:       Author;
}


export interface CarrucelData {
  id: number,
  title: string,
  author: Author,
  image: string,
  created_at: string,
  last_read_at: string,
  description: string,
  category?: string
}

export interface Author {
  name:  string;
  photo: string;
}
