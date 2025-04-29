import React, { useState, useRef, useEffect } from 'react';
import { Pause, Play, ChevronDown, ChevronUp, Home, Search as SearchIcon, ListMusic, Heart, Library as LibraryIcon, Menu, X } from "lucide-react";
import './index.css';

const myPlaylists = [
  {
    id: 1,
    name: "Mi flor del pacífico",
    cover: "/playlistphotos/mi-flor-del-pacifico.jpg",
  },
  {
    id: 2,
    name: "standing in ovulation",
    cover: "/playlistphotos/standinginovulation.png",
  },
  {
    id: 3,
    name: "rae+sergio",
    cover: "/playlistphotos/rae+sergio.jpg",
  }
];

const songs = [
  {
    title: "Hello?",
    artist: "Clairo, Rejjie Snow",
    album: "diary 001",
    date: "2 days ago",
    duration: "2:15",
    audio: "/audio/hello-explained.m4a",
    cover: "/covers/hello.jpg",
    transcript: "I added this song because it reminds me of the very first moment we talked. It’s light and curious, just like you were when we met."
  },
  {
    title: "Tú",
    artist: "maye",
    album: "Tú",
    date: "2 days ago",
    duration: "3:26",
    audio: "/audio/tu-explained.m4a",
    cover: "/covers/tu.jpg",
    transcript: "This one is for when I look at you and can only think: it’s always been you."
  },
  {
    title: "Little by Little",
    artist: "The Marias",
    album: "CINEMA",
    duration: "1:34",
    audio: "/audio/little-by-little-explained.m4a",
    cover: "/covers/littlebylittle.jpg",
    transcript: "I love you",
  },
  {
    title: "Cariño",
    artist: "The Marias",
    album: "Superclean, Vol. ",
    duration: "1:34",
    audio: "/audio/carino.m4a",
    cover: "/covers/carino.jpg",
    transcript: "I love you",
  },
  {
    title: "Sienna",
    artist: "The Marias",
    audio: "/audio/Sienna.m4a",
    cover: "/covers/sienna.jpg",
    transcript: "I love you",
  },
  {
    title: "She's Mine Pt.2",
    artist: "J. Cole",
    audio: "/audio/shes-mine.m4a",
    cover: "/covers/shes-mine.jpg",
    transcript: "I love you",
  },
  {
    title: "million little reasons",
    artist: "Oscar Lang",
    audio: "/audio/million-little-reasons.m4a",
    cover: "/covers/million-little-reasons.jpg",
    transcript: "I love you",
  },
  {
    title: "A Walk Inside My Mind",
    artist: "Evann McIntosh",
    audio: "/audio/awalkinsidemymind.m4a",
    cover: "/covers/awalkinsidemymind.jpg",
    transcript: "I love you",
  },
  {
    title: "Intolewd",
    artist: "Matt Maltese",
    audio: "/audio/intolewd.m4a",
    cover: "/covers/intolewd.jpg",
    transcript: "I love you",
  },
  {
    title: "What Dreams Are Made Of",
    artist: "Evann McIntosh",
    audio: "/audio/whatdreamsaremadeof.m4a",
    cover: "/covers/whatdreamsaremadeof.jpg",
    transcript: "I love you",
  },
  {
    title: "Flaco",
    artist: "Mon Laferte",
    audio: "/audio/Flaco.m4a",
    cover: "/covers/flaco.jpg",
    transcript: "I love you",
  },
  {
    title: "Amor de Siempre",
    artist: "Cuco",
    audio: "/audio/amordesiempre.m4a",
    cover: "/covers/amordesiempre.jpg",
    transcript: "I love you",
  },
  {
    title: "Corazón Sin Cara",
    artist: "Prince Royce",
    audio: "/audio/corazonsincara.m4a",
    cover: "/covers/corazonsincara.jpg",
    transcript: "I love you",
  },
  {
    title: "Me Interesas",
    artist: "Noel Torres",
    audio: "/audio/meinteresas.m4a",
    cover: "/covers/meinteresas.jpg",
    transcript: "I love you",
  },
  {
    title: "Yours",
    artist: "Evann McIntosh",
    audio: "/audio/yours.m4a",
    cover: "/covers/yours.jpg",
    transcript: "I love you",
  },
  {
    title: "Love is Only a Feeling",
    artist: "Joey Bada$$",
    audio: "/audio/loveisonlyafeeling.m4a",
    cover: "/covers/loveisonlyafeeling.jpg",
    transcript: "I love you",
  },
  {
    title: "Amor Completo",
    artist: "Mon Laferte",
    audio: "/audio/amorcompleto.m4a",
    cover: "/covers/amorcompleto.jpg",
    transcript: "I love you",
  },
  {
    title: "Soledad y el Mar (feat. Los Macorinos)",
    artist: "Natalia Lafourcade, Los Macorinos",
    audio: "/audio/soledadyelmar.m4a",
    cover: "/covers/soledadyelmar.jpg",
    transcript: "I love you",
  },
  {
    title: "Nuestra Felicidad",
    artist: "DannyLux",
    audio: "/audio/nuestrafelicidad.m4a",
    cover: "/covers/nuestrafelicidad.jpg",
    transcript: "I love you",
  },
  {
    title: "Over the Moon",
    artist: "The Marias",
    audio: "/audio/overthemoon.m4a",
    cover: "/covers/overthemoon.jpg",
    transcript: "I love you",
  },
  {
    title: "Lejos de Ti",
    artist: "The Marias",
    audio: "/audio/Lejos.m4a",
    cover: "/covers/lejos.jpg",
    transcript: "I love you",
  },
  {
    title: "Jupiter To Mars",
    artist: "Rocco",
    audio: "/audio/jupitertomars.m4a",
    cover: "/covers/jupitertomars.jpg",
    transcript: "I love you",
  },
  {
    title: "All I Really Want Is You",
    artist: "The Marias",
    audio: "/audio/allireallywantisyou.m4a",
    cover: "/covers/allireallywantisyou.jpg",
    transcript: "I love you",
  },
  {
    title: "Objects in the Mirror - Live",
    artist: "Mac Miller",
    audio: "/audio/mourningafter.m4a",
    cover: "/covers/mourningafter.png",
    transcript: "I love you",
  },
  {
    title: "We'll Never Have Sex",
    artist: "Leith Ross",
    audio: "/audio/neverhadsex.m4a",
    cover: "/covers/neverhadsex.jpg",
    transcript: "I love you",
  },
];
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;
    const onEnded = () => setPlayingIndex(null);
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  const handlePlay = (i, src) => {
    const a = audioRef.current;
    if (playingIndex === i) {
      a.pause();
      setPlayingIndex(null);
    } else {
      a.src = src;
      a.play();
      setPlayingIndex(i);
    }
  };

  const toggleExpand = (i) =>
    setExpandedIndex((e) => (e === i ? null : i));

  const progress =
    playingIndex != null && audioRef.current.duration
      ? (audioRef.current.currentTime /
          audioRef.current.duration) *
        100
      : 0;

  return (
    <div className="flex h-screen bg-spotify-dark text-spotify-light overflow-hidden">
      {/* Sidebar */}
      <div
        className={`flex flex-col bg-zinc-900 text-gray-300 transition-all duration-300 ${
          sidebarOpen ? "w-64 p-4" : "w-16 p-2"
        }`}
      >
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className="mb-6 text-white"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Top nav icons */}
        <nav className="flex flex-col space-y-4 mb-8">
        <button className="flex items-center gap-4 hover:text-white">
            <SearchIcon size={20} />
            {sidebarOpen && <span className="text-sm">Search</span>}
          </button>
          <button className="flex items-center gap-4 hover:text-white">
            <LibraryIcon size={20} />
            {sidebarOpen && <span className="text-sm">Your Library</span>}
          </button>
        </nav>

        {/* Playlists list with covers */}
        <div className="flex-1 overflow-y-auto space-y-4">
          {myPlaylists.map((pl) => (
            <div
              key={pl.id}
              className="flex items-center gap-4 hover:text-white transition-colors"
            >
              <img
                src={pl.cover}
                alt={pl.name}
                className="w-10 h-10 rounded"
              />
              {sidebarOpen && (
                <span className="text-sm whitespace-nowrap">
                  {pl.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header + gradient */}
        <div className="relative">
          <div className="absolute inset-0 min-h-[400px] bg-gradient-to-b from-spotify-olive via-spotify-dark to-black -z-10" />
          <div className="relative z-10 p-8 flex items-end gap-6">
            <img
              src="/audio/playlist-cover.jpg"
              alt="Cover"
              className="w-56 h-56 rounded shadow-lg"
            />
            <div>
              <p className="uppercase text-xs font-bold text-spotify-gray">
                Private Playlist
              </p>
              <h1 className="text-8xl md:text-9xl font-extrabold leading-none">
                Mi flor del pacífico.
              </h1>
              <p className="text-sm text-spotify-gray mt-2">
                Un jardín de canciones — para mi plantita favorita, que
                crece con amor y entrena con fuego.
              </p>
              <p className="text-sm text-spotify-gray mt-1">
                sergio • {songs.length} tracks • 1 hr 30 min
              </p>
            </div>
          </div>
        </div>

        {/* Song list with sticky header */}
        <div className="flex-1 overflow-y-auto bg-spotify-dark">
          <div className="sticky top-0 z-20 bg-spotify-dark">
            <div className="grid grid-cols-[16px_4fr_2fr_1fr_60px] gap-4 px-6 py-2 text-sm text-gray-400 border-b border-zinc-800">
              <span>#</span>
              <span>Title</span>
              <span>Album</span>
              <span>Date added</span>
              <span className="text-right">⏱</span>
            </div>
          </div>
          <div className="px-6 pb-20">
            {songs.map((song, i) => (
              <div key={i} className="mb-2">
                <div className="group grid grid-cols-[16px_4fr_2fr_1fr_60px] gap-4 items-center py-3 border-b border-zinc-800 hover:bg-zinc-800/50 rounded">
                  <div className="text-gray-400">
                    <span className="group-hover:hidden">{i + 1}</span>
                    <button
                      onClick={() => handlePlay(i, song.audio)}
                      className="hidden group-hover:inline text-white"
                    >
                      {playingIndex === i ? (
                        <Pause size={18} />
                      ) : (
                        <Play size={18} />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div>
                      <p className="text-sm text-white font-semibold group-hover:underline">
                        {song.title}
                      </p>
                      <p className="text-xs text-gray-400">
                        {song.artist}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">
                    {song.album || "Unknown"}
                  </p>
                  <p className="text-xs text-gray-400">
                    {song.date || "Recently"}
                  </p>
                  <div className="flex items-center justify-end gap-2">
                    <p className="text-xs text-gray-400">
                      {song.duration || "0:00"}
                    </p>
                    <button
                      onClick={() => toggleExpand(i)}
                      className="text-gray-400 hover:text-white"
                    >
                      {expandedIndex === i ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                  </div>
                  {expandedIndex === i && (
                    <div className="col-span-full mt-2 px-4 py-2 bg-zinc-800 text-sm text-gray-300 rounded">
                      {song.transcript}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Now-playing bar */}
        {playingIndex != null && (
          <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 px-6 py-3 flex items-center">
            <img
              src={songs[playingIndex].cover}
              alt=""
              className="w-12 h-12 rounded mr-4"
            />
            <div className="mr-6">
              <p className="text-sm text-white font-semibold">
                {songs[playingIndex].title}
              </p>
              <p className="text-xs text-gray-400">
                {songs[playingIndex].artist}
              </p>
            </div>
            <div className="flex-1 relative h-1 bg-gray-700 rounded-full mx-4">
              <div
                className="h-full bg-spotify-olive rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-0 -mt-1.5 w-3 h-3 rounded-full bg-white shadow-lg"
                style={{ left: `${progress}%` }}
              />
            </div>
            <button
              onClick={() => {
                const a = audioRef.current;
                a.paused ? a.play() : a.pause();
                setPlayingIndex(a.paused ? null : playingIndex);
              }}
              className="text-white ml-4"
            >
              {audioRef.current.paused ? (
                <Play size={24} />
              ) : (
                <Pause size={24} />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
