"use client"

import { ChevronRight } from "lucide-react"
import { useState } from "react"
import ModalVideo from "react-modal-video"
import Image from "next/image"

export default function TimelineFeiras() {
  // Dados das feiras de carreiras com vídeos
  const timelineData = [
    {
      date: "2016",
      title: "Feira de Carreiras CEE 2016",
      videoId: "https://www.youtube.com/watch?v=a1hNo7GgRPA&t=14s",
      thumbnail: "https://img.youtube.com/vi/a1hNo7GgRPA/maxresdefault.jpg",
    },
    {
      date: "2017",
      title: "Feira de Carreiras CEE 2017",
      videoId: "https://www.youtube.com/watch?v=-irAo1ZR74E",
      thumbnail: "https://img.youtube.com/vi/-irAo1ZR74E/maxresdefault.jpg",
    },
    {
      date: "2018",
      title: "Feira de Carreiras CEE 2018",
      videoId: "https://www.youtube.com/watch?v=p4IiUA6-oYo",
      thumbnail: "https://img.youtube.com/vi/p4IiUA6-oYo/maxresdefault.jpg",
    },
    {
      date: "2019",
      title: "Feira de Carreiras CEE 2019",
      videoId: "https://www.youtube.com/watch?v=x8BUOivQDdE",
      thumbnail: "https://img.youtube.com/vi/x8BUOivQDdE/maxresdefault.jpg",
    },
    {
      date: "2023",
      title: "Feira de Carreiras CEE 2023",
      videoId: "https://www.youtube.com/watch?v=75LBhXnOH-w",
      thumbnail: "https://img.youtube.com/vi/75LBhXnOH-w/maxresdefault.jpg",
    },
    {
      date: "2024",
      title: "Feira de Carreiras CEE 2024",
      videoId: "https://www.youtube.com/watch?v=9JT7Rmdbf9k&t=221s",
      thumbnail: "https://img.youtube.com/vi/9JT7Rmdbf9k/maxresdefault.jpg",
    },
  ]

  const [isOpen, setOpen] = useState<number | null>(null)

  const handleVideoClick = (index: number) => {
    setOpen(index)
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Feiras de Carreiras CEE</h2>

        {/* Timeline para Desktop */}
        <div className="relative hidden md:block">
          {/* Linha Vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-primary"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="mb-24 relative">
              {/* Nó da Timeline com Logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full bg-white border-4 border-primary flex items-center justify-center">
                  <div className="text-primary font-bold text-xs">CEE</div>
                </div>
              </div>

              {/* Conteúdo - Alternando lados */}
              <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className={`w-5/12 ${index % 2 === 1 ? "pl-8" : "pr-8"}`}>
                  {/* Tag de Data */}
                  <div className={`mb-3 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg shadow-md">
                      {index % 2 === 1 && <ChevronRight className="h-5 w-5 mr-1 transform rotate-180" />}
                      <span className="font-bold text-lg">{item.date}</span>
                      {index % 2 === 0 && <ChevronRight className="h-5 w-5 ml-1" />}
                    </div>
                  </div>

                  <div className={`bg-white p-4 rounded-lg shadow-lg border-l-4 border-primary`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>

                    {/* Thumbnail do vídeo */}
                    <div className="relative rounded-md overflow-hidden aspect-video bg-gray-100">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover cursor-pointer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <button
                        onClick={() => handleVideoClick(index)}
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline para Mobile */}
        <div className="md:hidden relative">
          {/* Linha Vertical */}
          <div className="absolute left-4 top-0 h-full w-1 bg-primary"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="mb-16 relative pl-12">
              {/* Nó da Timeline */}
              <div className="absolute left-4 transform -translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-8 h-8 rounded-full bg-white border-3 border-primary flex items-center justify-center">
                  <div className="text-primary font-bold text-[8px]">CEE</div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="relative">
                {/* Tag de Data */}
                <div className="mb-3">
                  <div className="inline-flex items-center bg-primary text-white px-3 py-1 rounded-lg shadow-md">
                    <span className="font-bold text-sm">{item.date}</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-lg border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>

                  {/* Thumbnail do vídeo */}
                  <div className="relative rounded-md overflow-hidden aspect-video bg-gray-100">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover cursor-pointer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <button
                      onClick={() => handleVideoClick(index)}
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Estatísticas */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">800+</h3>
            <p className="text-gray-600 mt-2">Oportunidades Divulgadas</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">60+</h3>
            <p className="text-gray-600 mt-2">Eventos Realizados</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-600 mt-2">Empresas Atendidas</p>
          </div>
        </div>
      </div>

      {/* Modal de Vídeo */}
      {isOpen !== null && (
        <ModalVideo
          channel="youtube"
          isOpen={true}
          videoId={timelineData[isOpen].videoId.split('v=')[1].split('&')[0]}
          onClose={() => setOpen(null)}
          youtube={{
            autoplay: 1,
            controls: 1,
            rel: 0,
            modestbranding: 1
          }}
        />
      )}
    </div>
  )
} 