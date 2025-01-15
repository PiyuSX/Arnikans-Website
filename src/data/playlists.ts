import { LucideIcon, Youtube } from 'lucide-react';

interface Playlist {
    title: string;
    link: string;
    icon: LucideIcon;
}

const playlists: Playlist[] = [
    {
        title: "Code with Harry Sigma WebDev",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
        icon: Youtube,
    },
    {
        title: "100 Days Python Course",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
        icon: Youtube,
    },
    {
        title: "WebDev Basics",
        link: "https://www.youtube.com/watch?v=voXYG17rhQA",
        icon: Youtube,
    },
    {
        title: "React for Beginners",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL",
        icon: Youtube,
    },
    {
        title: "Advanced JavaScript",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9",
        icon: Youtube,
    },
    {
        title: "CSS Flexbox Tutorial",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd",
        icon: Youtube,
    },
    {
        title: "Node.js Crash Course",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O",
        icon: Youtube,
    },
    {
        title: "Full Stack Development",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB6b2z9sc1eLh5c",
        icon: Youtube,
    },
    {
        title: "Machine Learning Basics",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9ah7ddtYtflgwMwpT3xmjXY9",
        icon: Youtube,
    },
    {
        title: "Data Structures and Algorithms",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9",
        icon: Youtube,
    },
];

export default playlists;