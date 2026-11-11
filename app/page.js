import Board from "@/components/Board";
import Details from "@/components/Details";
import Intro from "@/components/Intro";
import ScrollFx from "@/components/ScrollFx";
import Cursor from "@/components/Cursor";
import { profile } from "@/content/site";

export default function Home() {
  return (
    <main className="room">
      <header className="masthead glass">
        <span className="mh-name">{profile.name}</span>
        <span className="mh-dot">✿</span>
        <span>{profile.role}</span>
        <span className="mh-dot">✿</span>
        <span>{profile.location}</span>
        {profile.status && <span className="mh-open"><i /> {profile.status}</span>}
      </header>
      <Board />
      <Intro />
      <Details />
      <ScrollFx />
      <Cursor />
    </main>
  );
}
