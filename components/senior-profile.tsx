"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Heart,
  Archive,
  Bell,
  Newspaper,
  HelpCircle,
  Search,
  Settings,
  MoreHorizontal,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const sidebarItems = [
  { icon: LayoutDashboard, label: "개요", active: true },
  { icon: Heart, label: "즐겨찾기", active: false },
  { icon: Archive, label: "보관함", active: false },
  { icon: Bell, label: "알림", active: false },
  { icon: Newspaper, label: "소식", active: false },
  { icon: HelpCircle, label: "고객지원", active: false },
]

const tabs = ["자서전", "사진", "인터뷰 영상", "가족 메모"]

const bookPages = [
  {
    type: "cover",
    leftContent: {
      poem: "지나온 날들을\n한 장씩 되돌아보며,\n내 삶의 조각들을\n따뜻하게 모았습니다.",
      dedication:
        "누구보다 열심히 살아낸 나에게,\n그리고 언젠가 이 책을 펼칠 당신에게,\n이 책이 작은 온기가 되기를 바랍니다.",
    },
    rightContent: {
      subtitle: "목포에서 시작된 교사의 꿈",
      title: "바다가\n건네준 희망",
      author: "이정희 지음",
    },
  },
  {
    type: "chapter",
    leftContent: {
      chapter: "제1장",
      title: "목포의 아침",
      content:
        "1934년, 목포의 작은 마을에서 태어났다. 아버지는 어부였고, 어머니는 항상 새벽부터 일어나 밥을 지으셨다. 바다 냄새와 함께 시작되는 아침은 지금도 생생하다.\n\n그 시절 우리 집 앞에는 작은 우물이 있었다. 동네 아이들과 함께 물을 길으러 가던 기억, 서로 장난치며 웃던 그 순수한 시절이 그립다.",
    },
    rightContent: {
      content:
        '학교에 가는 길은 멀었지만, 배움에 대한 열정은 그 어떤 것보다 컸다. 선생님이 되겠다는 꿈을 품은 것도 그 무렵이었다.\n\n"공부를 해야 사람이 된다"는 아버지의 말씀이 평생의 좌우명이 되었다. 가난했지만 책만은 아끼지 않으셨던 부모님 덕분에 나는 꿈을 꿀 수 있었다.',
      image: "/old-korean-village-seaside-morning.jpg",
    },
  },
  {
    type: "chapter",
    leftContent: {
      chapter: "제2장",
      title: "배움의 길",
      content:
        "서울로 올라와 사범대학에 입학했을 때, 세상이 다르게 보였다. 처음 보는 높은 건물들, 수많은 사람들, 그리고 끝없이 펼쳐진 가능성들.\n\n하지만 고향을 떠나온 외로움은 컸다. 밤마다 어머니가 보고 싶어 울었던 기억이 난다.",
    },
    rightContent: {
      content:
        "대학 시절, 평생의 반려자를 만났다. 같은 꿈을 가진 동기였던 그는 내 인생의 가장 큰 선물이었다.\n\n함께 공부하고, 함께 꿈꾸던 그 시절. 도서관 구석에서 나눈 조용한 대화들이 우리의 사랑을 키워갔다.",
      image: "/1950s-korean-university-students-studying.jpg",
    },
  },
]

const photos = [
  { id: 1, src: "/images/image-20-2810-29.png", title: "결혼식" },
  { id: 2, src: "/images/image-20-2811-29.png", title: "학창시절" },
  { id: 3, src: "/images/image-20-2812-29.png", title: "옛 학교" },
  { id: 4, src: "/images/image-20-2813-29.png", title: "어린 시절 가족" },
  { id: 5, src: "/images/image-20-2814-29.png", title: "고향 마을" },
  { id: 6, src: "/images/image-20-289-29.png", title: "젊은 시절 가족" },
  { id: 7, src: "/images/image-20-288-29.png", title: "교실 풍경" },
  { id: 8, src: "/images/image-20-286-29.png", title: "요리하는 모습" },
  { id: 9, src: "/images/image-20-2815-29.png", title: "온 가족" },
  { id: 10, src: "/images/image-20-287-29.png", title: "바다에서" },
]

const videos = [
  { id: 1, title: "나의 어린 시절 이야기", duration: "12:34", src: "/images/interview-1.png" },
  { id: 2, title: "가족에게 전하는 말", duration: "8:21", src: "/images/interview-2.png" },
  { id: 3, title: "인생의 지혜", duration: "15:45", src: "/images/interview-1.png" },
  { id: 4, title: "추억의 장소들", duration: "10:12", src: "/images/interview-2.png" },
]

// 가족 메모 - 포스트잇 메모 데이터
const memoryNotes = [
  {
    id: 1,
    author: "김민수",
    relation: "아들",
    content: "어머니, 항상 새벽같이 일어나 아침 밥상 차려주시던 모습이 아직도 눈에 선해요. 그 따뜻한 손길과 사랑, 평생 잊지 못할 거예요. 사랑합니다.",
    color: "bg-yellow-100",
    rotation: "-rotate-2",
    date: "2024.10.15",
  },
  {
    id: 2,
    author: "김은지",
    relation: "딸",
    content: "엄마가 해주시던 김치찌개 맛이 그리워요. 제가 힘들때마다 따뜻하게 안아주시던 엄마... 천국에서도 행복하세요. 딸이 많이 보고싶어해요.",
    color: "bg-pink-100",
    rotation: "rotate-1",
    date: "2024.10.12",
  },
  {
    id: 3,
    author: "박영숙",
    relation: "친구",
    content: "순희야, 우리 젊었을 때 같이 시장 다니며 웃던 날들이 엊그제 같은데... 먼저 간 네가 너무 보고싶다. 다음 생에도 우리 꼭 친구하자.",
    color: "bg-blue-100",
    rotation: "-rotate-1",
    date: "2024.10.18",
  },
  {
    id: 4,
    author: "김서연",
    relation: "손녀",
    content: "할머니, 어릴 때 할머니 댁에서 보낸 여름방학이 제 인생 최고의 추억이에요. 할머니가 만들어주신 수박화채, 그 맛을 잊을 수가 없어요. 💕",
    color: "bg-green-100",
    rotation: "rotate-2",
    date: "2024.10.20",
  },
  {
    id: 5,
    author: "이정희",
    relation: "동생",
    content: "언니, 어린 시절 목포에서 함께 바다를 보며 꿈을 나누던 그 시절이 그립습니다. 언니의 손을 잡고 학교 가던 그 길, 영원히 기억할게요.",
    color: "bg-purple-100",
    rotation: "-rotate-3",
    date: "2024.10.08",
  },
  {
    id: 6,
    author: "김준혁",
    relation: "손자",
    content: "할머니, 저 의사 됐어요! 할머니가 항상 응원해주셨잖아요. 하늘에서 보고 계시죠? 할머니 덕분에 여기까지 올 수 있었어요. 감사합니다.",
    color: "bg-orange-100",
    rotation: "rotate-1",
    date: "2024.11.02",
  },
  {
    id: 7,
    author: "정미경",
    relation: "며느리",
    content: "어머님, 처음 시집왔을 때 서툰 저를 친딸처럼 대해주셔서 감사했어요. 어머님의 따뜻한 마음을 본받아 저도 좋은 엄마가 될게요.",
    color: "bg-teal-100",
    rotation: "-rotate-2",
    date: "2024.10.25",
  },
  {
    id: 8,
    author: "김동현",
    relation: "조카",
    content: "이모, 명절때마다 맛있는 잡채 만들어주시던 게 생각나요. 이모 손맛은 세계 최고였어요. 이모가 너무 보고싶어요.",
    color: "bg-rose-100",
    rotation: "rotate-3",
    date: "2024.10.30",
  },
  {
    id: 9,
    author: "최순자",
    relation: "친구",
    content: "순희 언니, 우리 경로당에서 화투 치며 웃던 날들... 언니 없는 경로당이 너무 허전해. 거기서도 화투 치고 있어? 보고싶어.",
    color: "bg-amber-100",
    rotation: "-rotate-1",
    date: "2024.11.05",
  },
  {
    id: 10,
    author: "김하늘",
    relation: "증손녀",
    content: "증할머니! 저 이제 한글 다 배웠어요. 증할머니가 가르쳐주신 동요 아직도 부르고 있어요. 하늘나라에서도 제 노래 들리죠? 🎵",
    color: "bg-cyan-100",
    rotation: "rotate-2",
    date: "2024.11.10",
  },
]

export default function SeniorProfile() {
  const [activeTab, setActiveTab] = useState("자서전") // 기본 탭을 자서전으로 변경

  const [currentPage, setCurrentPage] = useState(0) // 전자책 페이지 상태 추가

  const nextPage = () => {
    if (currentPage < bookPages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-56 border-r border-border bg-card">
        <div className="flex h-16 items-center gap-2 px-6">
          <Image src="/images/logo.jpg" alt="기억의 서랍 로고" width={32} height={32} className="rounded-md" />
          <span className="text-lg font-semibold text-foreground">기억의 서랍</span>
        </div>

        <nav className="mt-4 px-3">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors mb-1",
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-56 flex-1">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/95 backdrop-blur px-6">
          <span className="text-sm font-medium text-foreground">대시보드</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="컨텐츠 검색"
                className="w-32 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button className="rounded-full p-2 hover:bg-muted">
              <Bell className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="rounded-full p-2 hover:bg-muted">
              <Settings className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              슬라이드 쇼 보기
            </button>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative h-48 w-full">
          <img
            src="/peaceful-sky-clouds-sunset-korean-landscape.jpg"
            alt="커버 이미지"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        {/* Profile Section */}
        <div className="relative px-8 pb-6">
          <div className="flex items-end gap-6">
            {/* Profile Image */}
            <div className="-mt-16 relative">
              <img
                src="/images/image.png"
                alt="프로필 사진"
                className="h-44 w-36 rounded-lg border-4 border-background object-cover shadow-lg"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">김순희</h1>
                  <p className="mt-1 text-sm text-muted-foreground">1934년 7월 29일 - 2024년 10월 3일</p>
                  <p className="text-sm text-muted-foreground">서울특별시, 대한민국</p>
                </div>
                <button className="rounded-full p-2 hover:bg-muted">
                  <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
              <button className="mt-4 rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                프로필 편집
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 border-b border-border">
            <div className="flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "pb-3 text-sm font-medium transition-colors relative",
                    activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
                </button>
              ))}
            </div>
          </div>



          {/* Content Area */}
          <div className="mt-8">
            {activeTab === "자서전" && (
              <div className="flex flex-col items-center">
                {/* Book Container */}
                <div className="relative w-full max-w-4xl">
                  {/* Book Shadow */}
                  <div className="absolute -bottom-4 left-1/2 h-8 w-[90%] -translate-x-1/2 rounded-[50%] bg-black/10 blur-xl" />

                  {/* Book */}
                  <div className="relative flex min-h-[500px] overflow-hidden rounded-lg shadow-2xl">
                    {/* Left Page */}
                    <div className="flex-1 bg-[#e8e4dc] p-8 relative">
                      {/* Book spine shadow */}
                      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/10 to-transparent" />

                      {bookPages[currentPage].type === "cover" ? (
                        <div className="flex flex-col justify-center h-full pr-8">
                          <p className="text-lg leading-relaxed text-foreground/80 whitespace-pre-line font-medium">
                            {bookPages[currentPage].leftContent.poem}
                          </p>
                          <div className="mt-8 border-t border-foreground/20 pt-6">
                            <p className="text-sm leading-relaxed text-foreground/60 whitespace-pre-line">
                              {bookPages[currentPage].leftContent.dedication}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="h-full pr-8">
                          <p className="text-sm text-primary font-medium">
                            {bookPages[currentPage].leftContent.chapter}
                          </p>
                          <h2 className="mt-2 text-2xl font-bold text-foreground">
                            {bookPages[currentPage].leftContent.title}
                          </h2>
                          <div className="mt-6">
                            <p className="text-sm leading-relaxed text-foreground/80 whitespace-pre-line">
                              {bookPages[currentPage].leftContent.content}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Book Spine */}
                    <div className="w-4 bg-gradient-to-r from-[#c9c4b8] via-[#d4d0c4] to-[#c9c4b8] shadow-inner">
                      {bookPages[currentPage].type === "cover" && (
                        <div className="h-full flex items-center justify-center">
                          <span
                            className="text-[10px] text-foreground/50 writing-mode-vertical transform rotate-180"
                            style={{ writingMode: "vertical-rl" }}
                          >
                            바다가 건네준 희망
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Right Page */}
                    <div className="flex-1 bg-[#e8e4dc] p-8 relative overflow-hidden">
                      {/* Book spine shadow */}
                      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/10 to-transparent" />

                      {bookPages[currentPage].type === "cover" ? (
                        <div className="relative h-full pl-8">
                          {/* Cover Image */}
                          <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                            <img src="/images/book-cover.jpg" alt="책 표지" className="h-full w-full object-cover" />
                          </div>
                          <div className="mt-6">
                            <p className="text-sm text-foreground/60">{bookPages[currentPage].rightContent.subtitle}</p>
                            <h1 className="mt-2 text-3xl font-bold text-primary whitespace-pre-line leading-tight">
                              {bookPages[currentPage].rightContent.title}
                            </h1>
                            <p className="mt-4 text-sm text-foreground/70">
                              {bookPages[currentPage].rightContent.author}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="h-full pl-8">
                          <p className="text-sm leading-relaxed text-foreground/80 whitespace-pre-line">
                            {bookPages[currentPage].rightContent.content}
                          </p>
                          {bookPages[currentPage].rightContent.image && (
                            <div className="mt-6">
                              <img
                                src={bookPages[currentPage].rightContent.image || "/placeholder.svg"}
                                alt="챕터 이미지"
                                className="w-full h-40 object-cover rounded-lg"
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {/* Page Number */}
                      <div className="absolute bottom-4 right-8 text-xs text-foreground/40">
                        {currentPage + 1} / {bookPages.length}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-8 flex items-center gap-6">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                      currentPage === 0 ? "text-muted-foreground cursor-not-allowed" : "text-foreground hover:bg-muted",
                    )}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    이전 페이지
                  </button>

                  <div className="flex gap-2">
                    {bookPages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={cn(
                          "h-2 w-2 rounded-full transition-colors",
                          currentPage === index ? "bg-primary" : "bg-muted-foreground/30",
                        )}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextPage}
                    disabled={currentPage === bookPages.length - 1}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                      currentPage === bookPages.length - 1
                        ? "text-muted-foreground cursor-not-allowed"
                        : "text-foreground hover:bg-muted",
                    )}
                  >
                    다음 페이지
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* 사진 탭 */}
            {activeTab === "사진" && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                  >
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full transition-transform group-hover:translate-y-0">
                      <p className="text-sm font-medium text-white">{photo.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 인터뷰 영상 탭 */}
            {activeTab === "인터뷰 영상" && (
              <div className="grid grid-cols-2 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="group relative overflow-hidden rounded-xl">
                    <div className="aspect-video relative">
                      <img
                        src={video.src || "/placeholder.svg"}
                        alt={video.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform group-hover:scale-110">
                          <Play className="h-6 w-6 fill-current" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                        {video.duration}
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="font-medium text-foreground">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">인터뷰 영상</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 가족 메모 탭 */}
            {activeTab === "가족 메모" && (
              <div className="py-8">
                {/* 헤더 섹션 */}
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-2">💝 가족 메모</h2>
                  <p className="text-muted-foreground">가족, 친구, 그리고 사랑하는 이들이 남긴 따뜻한 메시지</p>
                </div>

                {/* 포스트잇 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                  {memoryNotes.map((note) => (
                    <div
                      key={note.id}
                      className={cn(
                        "relative p-5 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer",
                        note.color,
                        note.rotation,
                        "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
                        "before:w-8 before:h-4 before:bg-yellow-200/80 before:rounded-sm before:shadow-sm"
                      )}
                      style={{
                        boxShadow: "2px 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {/* 테이프 효과 */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-5 bg-amber-200/60 rounded-sm" />

                      {/* 관계 배지 */}
                      <span className="absolute -top-1 -right-1 px-2 py-0.5 text-xs font-medium bg-white/80 rounded-full shadow-sm border border-gray-200">
                        {note.relation}
                      </span>

                      {/* 메시지 내용 */}
                      <p className="text-sm text-gray-700 leading-relaxed mb-4 pt-2 font-medium" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                        "{note.content}"
                      </p>

                      {/* 작성자 정보 */}
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200/50">
                        <span className="text-sm font-bold text-gray-800">{note.author}</span>
                        <span className="text-xs text-gray-500">{note.date}</span>
                      </div>

                      {/* 종이 접힌 효과 */}
                      <div
                        className="absolute bottom-0 right-0 w-0 h-0"
                        style={{
                          borderLeft: "12px solid transparent",
                          borderBottom: "12px solid rgba(0,0,0,0.08)",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* 메모 추가 버튼 */}
                <div className="flex justify-center mt-8">
                  <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg">
                    <span className="text-xl">+</span>
                    새 메시지 남기기
                  </button>
                </div>
              </div>
            )}


          </div>
        </div>
      </main>
    </div>
  )
}
