import { useState } from 'react'
import './Letter.css'

// ── OUT 뷰 에셋 (04_Latter) ─────────────────────────────
const IMG_STARS_BG = 'https://www.figma.com/api/mcp/asset/b31798b7-f99d-469b-8f37-cea6a3d87b06' // 04_Latter 배경
const IMG_ENV1     = 'https://www.figma.com/api/mcp/asset/10c56599-02b6-4f4d-bd66-6d3da41ae82f' // From 단비 (image 60)
const IMG_ENV2     = 'https://www.figma.com/api/mcp/asset/e304feb5-57eb-4d61-b197-9820ab2241da' // From 은하 (image 61)

// ── IN 뷰 에셋 — 피그마 최신 기준: 전체 합성 단일 이미지 + 닫기 버튼
const LETTER_DATA = {
  1: {
    // 04_Latter_1 — From 단비
    fullBg: 'https://www.figma.com/api/mcp/asset/97e3d385-7085-446a-b71e-174f1c879fb9',
    close:  'https://www.figma.com/api/mcp/asset/41a6dcbe-fe61-401f-9900-d69f561e28cb',
  },
  2: {
    // 04_Latter_2 — From 은하
    fullBg: 'https://www.figma.com/api/mcp/asset/0504ff96-5e2e-4550-b027-2882ec543f89',
    close:  'https://www.figma.com/api/mcp/asset/9e34d46d-fa8c-4763-84f6-90240d1de6e2',
  },
}

export default function Letter({ onNavigate }) {
  const [openLetter, setOpenLetter] = useState(null) // null | 1 | 2

  const data = openLetter ? LETTER_DATA[openLetter] : null

  return (
    <div className="letter-root">

      {/* ══════════════════════════════════════
          OUT 뷰 — 봉투 목록 (04_Latter)
      ══════════════════════════════════════ */}
      <div className={`letter-out ${openLetter ? 'hidden' : ''}`}>

        <div className="lo-overlay" />
        <img className="lo-stars" src={IMG_STARS_BG} alt="" />

        <div className="lo-nav">
          <button className="lo-nav-tab" onClick={() => onNavigate('photo')}>photo</button>
          <button className="lo-nav-tab" onClick={() => onNavigate('friend')}>Friends</button>
          <button className="lo-nav-tab active">Letter</button>
        </div>

        {/* 봉투 2 — From 은하, rotate(+38.04deg) → 04_Latter_2
            z-index:10, 겹치는 영역에서 Env1(z-index:100)에 가려짐 */}
        <div
          className="lo-env-wrap env2"
          style={{ zIndex: 10 }}
          onClick={() => setOpenLetter(2)}
        >
          <div className="lo-env-inner env2-inner">
            <img className="lo-env-img" src={IMG_ENV2} alt="envelope" />
          </div>
        </div>

        {/* 봉투 1 — From 단비, rotate(-2.4deg) → 04_Latter_1
            z-index:100, 겹치는 영역에서 클릭 우선 보장 */}
        <div
          className="lo-env-wrap env1"
          style={{ zIndex: 100 }}
          onClick={() => setOpenLetter(1)}
        >
          <div className="lo-env-inner env1-inner">
            <img className="lo-env-img" src={IMG_ENV1} alt="envelope" />
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════
          IN 뷰 — 편지 상세 (단일 합성 이미지)
      ══════════════════════════════════════ */}
      {data && (
        <div className="letter-in">
          <img className="li-full-bg" src={data.fullBg} alt="" />
          <button className="li-close-btn" onClick={() => setOpenLetter(null)}>
            <img src={data.close} alt="close" />
          </button>
        </div>
      )}

    </div>
  )
}
