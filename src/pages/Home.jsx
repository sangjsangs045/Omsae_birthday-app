import './Home.css'

// ── 배경 (라커+스티커 전체 합성) ─────────────────────────
const IMG_BG     = 'https://www.figma.com/api/mcp/asset/1dd3480f-2525-4cd5-b837-baab1dec6c46'
// ── 폰 (→ Friend) ────────────────────────────────────────
const IMG_PHONE  = 'https://www.figma.com/api/mcp/asset/15145aca-bc86-4776-8ec6-ddc3dc52722b'
// ── 편지 봉투 (→ Letter) ─────────────────────────────────
const IMG_LETTER = 'https://www.figma.com/api/mcp/asset/57f97faf-f3eb-4570-8b68-b8de32a33cbb'
const IMG_ENV65  = 'https://www.figma.com/api/mcp/asset/f6d03c6a-9029-44d4-a850-06d80aba011f' // 편지 옆 스티커
// ── 인생네컷 사진 (→ Photo) ───────────────────────────────
const IMG_CUT1   = 'https://www.figma.com/api/mcp/asset/a707a9c0-7f14-4c9e-9e3e-2497ef8fb1cc'
const IMG_CUT2   = 'https://www.figma.com/api/mcp/asset/ee235c61-9980-4f17-9233-19590abbc568'
const IMG_CUT3   = 'https://www.figma.com/api/mcp/asset/e2fc3766-4422-44e1-839c-d5ad4fad2b21'
const IMG_CUT4   = 'https://www.figma.com/api/mcp/asset/3257ba13-246f-4d68-a92e-6bb03006a61e'
// ── 장식 스티커 ──────────────────────────────────────────
const IMG_STAR77 = 'https://www.figma.com/api/mcp/asset/81e28e2a-709b-448b-993a-7569bf0c1250' // 별 스티커
const IMG_IMG76  = 'https://www.figma.com/api/mcp/asset/7d5f9bbe-84fe-48e7-b783-fa0a6b0fdc4b' // image 76

export default function Home({ onNavigate }) {
  return (
    <div className="home-root">

      {/* ① 전체 배경 (라커 + 모든 데코레이션 합성) */}
      <img className="h-bg" src={IMG_BG} alt="" />

      {/* ② 폰 → Friend */}
      <div
        className="h-phone-wrap h-wobble"
        onClick={() => onNavigate('friend')}
      >
        <img className="h-phone" src={IMG_PHONE} alt="" />
      </div>

      {/* ③ 인생네컷 → Photo */}
      <div
        className="h-strip-wrap h-wobble"
        onClick={() => onNavigate('photo')}
      >
        <div className="h-strip-rotate">
          <div className="h-strip-inner">
            <div className="h-strip-paper">
              <img src={IMG_CUT1} alt="" />
              <img src={IMG_CUT2} alt="" />
              <img src={IMG_CUT3} alt="" />
              <img src={IMG_CUT4} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* 인생네컷 주변 장식 (클릭 안 됨) */}
      <img className="h-star77" src={IMG_STAR77} alt="" />
      <div className="h-img76-wrap">
        <img className="h-img76" src={IMG_IMG76} alt="" />
      </div>

      {/* ④ 편지 → Letter */}
      {/* 편지 옆 스티커 (장식, 클릭 안 됨) */}
      <div className="h-env-deco">
        <img className="h-env-img" src={IMG_ENV65} alt="" />
      </div>
      <div
        className="h-letter-wrap h-wobble"
        onClick={() => onNavigate('letter')}
      >
        <img className="h-letter" src={IMG_LETTER} alt="" />
      </div>

    </div>
  )
}
