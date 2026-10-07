/**
 * Auto-generated Media Assets from Pexels API
 * Project: ebrief-us-ops
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "14850053",
    "url": "https://images.pexels.com/photos/14850053/pexels-photo-14850053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A well-dressed businessman uses a tablet inside a modern office environment.",
    "avg_color": "#D0C9C3"
},
  editorialPhotos: [
    {
    "id": "12326656",
    "url": "https://images.pexels.com/photos/12326656/pexels-photo-12326656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Close-up of a hand interacting with a touch screen tablet, showcasing modern technology use.",
    "avg_color": "#254369"
},
    {
    "id": "39459349",
    "url": "https://images.pexels.com/photos/39459349/pexels-photo-39459349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Team of surgeons in an operating room performing a medical procedure, ensuring patient care.",
    "avg_color": "#7C8A8D"
},
    {
    "id": "3789146",
    "url": "https://images.pexels.com/photos/3789146/pexels-photo-3789146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Senior businessman in a black coat using smartphone outdoors near modern building.",
    "avg_color": "#6B6968"
}
  ],
  ambientVideo: {
    "id": "34118821",
    "videoUrl": "https://videos.pexels.com/video-files/34118821/14468537_640_360_24fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/34118821/abstract-background-cg-cg-art-green-34118821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 640,
    "height": 360
}
};
