import { useState } from 'react'
import './Friend.css'

const IMG_BG    = 'https://www.figma.com/api/mcp/asset/81b26701-95d7-482b-a2dd-25335a471009' // 배경+폰 합성
const IMG_ARROW = 'https://www.figma.com/api/mcp/asset/7dc6ce07-3bea-436e-840f-7e7e4a00abaf'

// 사진 19장 — 레이어 번호 순 (01→02→...→10→12→...→20, 11 없음)
const PHOTOS = [
  'https://www.figma.com/api/mcp/asset/1f5ed847-4058-4331-b28d-81fe904822c4', // 1
  'https://www.figma.com/api/mcp/asset/33d8746f-3dc1-4844-8384-f30bd66c253b', // 2
  'https://www.figma.com/api/mcp/asset/2af7a217-6cc3-444c-9fac-b4b6b9afa7b2', // 3
  'https://www.figma.com/api/mcp/asset/f1c73e50-4d8f-4aa1-98c9-f18749715fb8', // 4
  'https://www.figma.com/api/mcp/asset/c13977aa-3624-4514-b186-422eb1cab325', // 5
  'https://www.figma.com/api/mcp/asset/f588d439-9773-4ab7-b94b-a07a58251111', // 6
  'https://www.figma.com/api/mcp/asset/11b96404-8bdd-4ed4-afc4-833802ded845', // 7
  'https://www.figma.com/api/mcp/asset/214f2bb2-ae23-4d05-9270-0f9807db2983', // 8
  'https://www.figma.com/api/mcp/asset/76e53ec1-05c0-452c-af18-0cab7e7ff339', // 9
  'https://www.figma.com/api/mcp/asset/179ec218-7c1b-4733-8c60-a5708aa8d33b', // 10
  'https://www.figma.com/api/mcp/asset/8d69ee1e-138a-4b75-8588-a9ba8e2ce83a', // 12
  'https://www.figma.com/api/mcp/asset/b0743fc5-f840-437a-bb20-e340bc748524', // 13
  'https://www.figma.com/api/mcp/asset/85eeb558-1dca-4c14-b2df-d5e0c2ef2acc', // 14
  'https://www.figma.com/api/mcp/asset/1a3359af-c340-41d0-8cca-5c05ff5f4c4a', // 15
  'https://www.figma.com/api/mcp/asset/e8550e31-3d8e-408e-9cdd-8187fa235a1c', // 16
  'https://www.figma.com/api/mcp/asset/feb5f0f8-176e-4f96-8b60-d8d5c7dd39c1', // 17
  'https://www.figma.com/api/mcp/asset/d02e3fc9-f6ab-48cb-8ed9-3d843e42f4de', // 18
  'https://www.figma.com/api/mcp/asset/3b063f5a-1a14-4178-a8a8-5d05bfd2abf3', // 19
  'https://www.figma.com/api/mcp/asset/222f35cd-a64f-41cb-a7aa-46110c2b8e9a', // 20
]

const PHOTO_W = 215.701
const STEP    = PHOTO_W + 54   // 269.701px — 사진 너비 + gap

export default function Friend({ onNavigate }) {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx(i => Math.max(0, i - 1))
  const next = () => setIdx(i => Math.min(PHOTOS.length - 1, i + 1))

  return (
    <div className="friend-root">

      {/* ① 배경 이미지 */}
      <img className="fr-bg" src={IMG_BG} alt="" />

      {/* ② 탭 네비 */}
      <div className="fr-nav">
        <button className="fr-nav-tab" onClick={() => onNavigate('photo')}>photo</button>
        <button className="fr-nav-tab active">Friends</button>
        <button className="fr-nav-tab" onClick={() => onNavigate('letter')}>Letter</button>
      </div>

      {/* ③ 폰 스크린 회색 배경 */}
      <div className="fr-screen-bg" />

      {/* ⑤ 사진 — 각 사진을 클립 중앙 기준 절대 위치 */}
      <div className="fr-photos-clip">
        {PHOTOS.map((src, i) => {
          const offset = (i - idx) * STEP
          return (
            <div
              key={i}
              className="fr-photo-item"
              style={{ transform: `translate(calc(-50% + ${offset}px), -50%)` }}
            >
              <img src={src} alt={`photo ${i + 1}`} />
            </div>
          )
        })}
      </div>

      {/* ⑥ 왼쪽 화살표 */}
      <button
        className="fr-arrow fr-arrow-left"
        onClick={prev}
        disabled={idx === 0}
      >
        <img src={IMG_ARROW} alt="prev" style={{ transform: 'rotate(180deg)' }} />
      </button>

      {/* ⑦ 오른쪽 화살표 */}
      <button
        className="fr-arrow fr-arrow-right"
        onClick={next}
        disabled={idx === PHOTOS.length - 1}
      >
        <img src={IMG_ARROW} alt="next" />
      </button>

    </div>
  )
}
