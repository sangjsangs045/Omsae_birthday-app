import { useState, useRef, useEffect, useCallback } from 'react'
import './Photo.css'

// ── 프레임 PNG (수정본) ───────────────────────────────
import frame01 from '../assets/frames/수정/인생네컷 프레임_01_기본형.png'
import frame02 from '../assets/frames/수정/인생네컷 프레임_02_동물-캐릭터형.png'
import frame03 from '../assets/frames/수정/인생네컷 프레임_03_봄형.png'
import frame04 from '../assets/frames/수정/인생네컷 프레임_04_사람-캐릭터형.png'
import frame05 from '../assets/frames/수정/인생네컷 프레임_05_생일축하.png'
import frame06 from '../assets/frames/수정/인생네컷 프레임_06_아임더퀸.png'
import frame10 from '../assets/frames/수정/인생네컷 프레임_10_가로형.png'

// ── 01 에셋 ──────────────────────────────────────────
const IMG_01_FULL = 'https://www.figma.com/api/mcp/asset/deef5ac9-67ae-4fa2-943e-8fb139035534'
// ── 02 에셋 ──────────────────────────────────────────
const IMG_02_MAIN = 'https://www.figma.com/api/mcp/asset/03ba7769-f35c-4dd5-aeb7-997d0cf01de4'
const IMG_02_STAR = 'https://www.figma.com/api/mcp/asset/a471a0ec-2382-48a7-82cb-5c934683b5a4'
const IMG_CLOSE   = 'https://www.figma.com/api/mcp/asset/24675995-4ab8-438b-8708-8cf6096c46f0'
// ── 03 에셋 ──────────────────────────────────────────
const IMG_03_STAR  = 'https://www.figma.com/api/mcp/asset/32a84df9-e3d5-4685-aac8-691c5fe2ff0b'
const IMG_03_CLOSE = 'https://www.figma.com/api/mcp/asset/76710551-0d77-4c56-9a34-01e4099b64f0'
const IMG_NAV_ARR  = 'https://www.figma.com/api/mcp/asset/269588d3-7a89-4234-b510-39a2f853ed71'
// ── 03H 에셋 ─────────────────────────────────────────
const IMG_03H_STAR  = 'https://www.figma.com/api/mcp/asset/bb19b2e1-7bc9-4061-8b34-637569769e35'
const IMG_03H_CLOSE = 'https://www.figma.com/api/mcp/asset/1ad10dc4-cf89-4ed9-a81a-3dd2f44554fe'
// ── 04 에셋 ──────────────────────────────────────────
const IMG_04_CLOSE   = 'https://www.figma.com/api/mcp/asset/566a36aa-8e31-49d0-bf84-608e59fe25d8'
const IMG_04H_CLOSE  = 'https://www.figma.com/api/mcp/asset/f1823d09-95f7-44fd-9e34-1e83d52d93ef'
// ── 08 에셋 ──────────────────────────────────────────
const IMG_DONE    = 'https://www.figma.com/api/mcp/asset/eda37062-7a04-4dc5-bd0e-0727adeaf2bb'
// ── 06H 에셋 (03-4) ───────────────────────────────────
const IMG_06H_DONE = 'https://www.figma.com/api/mcp/asset/0a32881d-fe12-4338-8778-9bf82df53239'

// ── 프레임 설정 (순서: 01→02→03→04→05→06) ────────────
const FRAME_CONFIGS = [
  {
    id: '01_basic',
    src: frame01,
    width: 403, height: 1290,
    slots: [
      { x: 33,  y: 52,  width: 338, height: 236 },
      { x: 33,  y: 312, width: 338, height: 236 },
      { x: 33,  y: 572, width: 338, height: 236 },
      { x: 33,  y: 832, width: 338, height: 236 },
    ],
  },
  {
    id: '02_animal_character',
    src: frame02,
    width: 403, height: 1290,
    slots: [
      { x: 30,  y: 50,  width: 342, height: 240 },
      { x: 30,  y: 310, width: 342, height: 240 },
      { x: 30,  y: 570, width: 342, height: 240 },
      { x: 30,  y: 830, width: 342, height: 240 },
    ],
  },
  {
    id: '03_spring',
    src: frame03,
    width: 403, height: 1290,
    slots: [
      { x: 31,  y: 50,  width: 342, height: 240 },
      { x: 31,  y: 310, width: 342, height: 240 },
      { x: 31,  y: 570, width: 342, height: 240 },
      { x: 31,  y: 830, width: 342, height: 240 },
    ],
  },
  {
    id: '04_human_character',
    src: frame04,
    width: 403, height: 1290,
    slots: [
      { x: 31,  y: 50,  width: 341, height: 240 },
      { x: 31,  y: 310, width: 341, height: 240 },
      { x: 31,  y: 570, width: 341, height: 240 },
      { x: 31,  y: 830, width: 341, height: 240 },
    ],
  },
  {
    id: '05_birthday',
    src: frame05,
    width: 403, height: 1290,
    slots: [
      { x: 31,  y: 135, width: 341, height: 240 },
      { x: 31,  y: 395, width: 341, height: 240 },
      { x: 31,  y: 655, width: 341, height: 240 },
      { x: 31,  y: 915, width: 341, height: 240 },
    ],
  },
  {
    id: '06_queen',
    src: frame06,
    width: 403, height: 1290,
    slots: [
      { x: 30,  y: 60,  width: 342, height: 240 },
      { x: 30,  y: 320, width: 342, height: 240 },
      { x: 30,  y: 580, width: 342, height: 240 },
      { x: 30,  y: 840, width: 342, height: 240 },
    ],
  },
  {
    id: '10_horizontal',
    src: frame10,
    type: 'horizontal',
    width: 841, height: 1271,
    slots: [
      { x: 437, y: 64,  width: 354, height: 420 }, // 우상단
      { x: 46,  y: 337, width: 354, height: 420 }, // 좌중단
      { x: 437, y: 508, width: 354, height: 420 }, // 우중단
      { x: 46,  y: 781, width: 354, height: 457 }, // 좌하단
    ],
  },
]

const PORTRAIT_FRAMES = FRAME_CONFIGS.slice(0, 6)

// ── 03 캐러셀 상수 ────────────────────────────────────
const SIDE_W    = 136.327
const GAP       = 36
const STEP      = SIDE_W + GAP
const SCREEN_CX = 206

// ── 유틸: 이미지 로드 ──────────────────────────────────
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

// ─────────────────────────────────────────────────────
//  01  입장 화면
// ─────────────────────────────────────────────────────
function Photo01({ onNext, onNavigate }) {
  return (
    <div className="ph-root ph01-root">
      <img className="ph01-bg-full" src={IMG_01_FULL} alt="" />

      <div className="ph-nav">
        <button className="ph-nav-tab active">photo</button>
        <button className="ph-nav-tab" onClick={() => onNavigate('friend')}>Friends</button>
        <button className="ph-nav-tab" onClick={() => onNavigate('letter')}>Letter</button>
      </div>

      <button className="ph01-enter-btn ph-hover-btn" onClick={onNext}>
        입장하기
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────
//  02  선택 화면
// ─────────────────────────────────────────────────────
function Photo02({ onFrames, onShoot, onClose }) {
  return (
    <div className="ph-root ph02-root">
      <div className="ph02-bg-box" />
      <img className="ph02-stars"    src={IMG_02_STAR} alt="" />
      <img className="ph02-main-img" src={IMG_02_MAIN} alt="" />

      <button className="ph-close-btn" onClick={onClose}>
        <img src={IMG_CLOSE} alt="close" />
      </button>

      <button className="ph02-btn ph-hover-btn ph02-btn-frame" onClick={onFrames}>
        프레임 고르기
      </button>
      <button className="ph02-btn ph-hover-btn ph02-btn-shoot" onClick={onShoot}>
        사진 촬영하기
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────
//  03  프레임 캐러셀
// ─────────────────────────────────────────────────────
function Photo03({ initIdx, onConfirm, onClose, onLandscape }) {
  const [frameIdx,        setFrameIdx]        = useState(initIdx ?? 0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const go = (newIdx) => {
    setIsTransitioning(true)
    setFrameIdx(newIdx)
    setTimeout(() => setIsTransitioning(false), 350)
  }
  const prev = () => { if (frameIdx > 0) go(frameIdx - 1) }
  const next = () => { if (frameIdx < PORTRAIT_FRAMES.length - 1) go(frameIdx + 1) }

  const stripX = SCREEN_CX - (frameIdx * STEP + SIDE_W / 2)

  return (
    <div className="ph-root ph03-root">
      <div className="ph03-bg-box" />
      <img className="ph03-stars" src={IMG_03_STAR} alt="" />

      <button className="ph-close-btn" onClick={onClose}>
        <img src={IMG_03_CLOSE} alt="close" />
      </button>

      <div className="ph03-toggle">
        <button className="ph03-toggle-tab active">세로</button>
        <button className="ph03-toggle-tab" onClick={onLandscape}>가로</button>
      </div>

      <div className="ph03-strip-outer">
        <div className="ph03-strip" style={{ transform: `translateX(${stripX}px)` }}>
          {PORTRAIT_FRAMES.map((frame, i) => {
            const isCenter = i === frameIdx
            return (
              <div
                key={frame.id}
                className={`ph03-frame-item${isCenter ? ' is-center' : ''}${isTransitioning ? ' is-transiting' : ''}`}
              >
                <img className="ph03-frame-img" src={frame.src} alt="" />
              </div>
            )
          })}
        </div>
      </div>

      <div className="ph03-fade-left"  />
      <div className="ph03-fade-right" />

      <button className="ph03-arrow ph03-arrow-left"  onClick={prev} disabled={frameIdx === 0}>
        <img src={IMG_NAV_ARR} alt="prev" style={{ transform: 'rotate(180deg)' }} />
      </button>
      <button className="ph03-arrow ph03-arrow-right" onClick={next} disabled={frameIdx === PORTRAIT_FRAMES.length - 1}>
        <img src={IMG_NAV_ARR} alt="next" />
      </button>

      <button className="ph03-confirm-btn ph-hover-btn" onClick={() => onConfirm(frameIdx)}>
        선택 완료
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────
//  03H  가로 프레임 선택 (03-1)
// ─────────────────────────────────────────────────────
function Photo03H({ onConfirm, onClose, onPortrait }) {
  return (
    <div className="ph-root ph03-root">
      <div className="ph03-bg-box" />
      <img className="ph03-stars" src={IMG_03H_STAR} alt="" />

      <button className="ph-close-btn" onClick={onClose}>
        <img src={IMG_03H_CLOSE} alt="close" />
      </button>

      <div className="ph03-toggle">
        <button className="ph03-toggle-tab" onClick={onPortrait}>세로</button>
        <button className="ph03-toggle-tab active">가로</button>
      </div>

      {/* 단일 프레임 표시 — 항상 선택 상태 */}
      <div className="ph03h-frame-wrap">
        <div className="ph03h-frame-item is-selected">
          <img className="ph03-frame-img" src={frame10} alt="" />
        </div>
      </div>

      <div className="ph03-fade-left"  />
      <div className="ph03-fade-right" />

      <button className="ph03-confirm-btn ph-hover-btn" onClick={onConfirm}>
        선택 완료
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────
//  04  촬영 화면
// ─────────────────────────────────────────────────────
function Photo04({ onComplete, onClose, frameConfig }) {
  const videoRef  = useRef(null)
  const canvasRef = useRef(null)
  const streamRef = useRef(null)
  const accRef    = useRef([])
  const aliveRef  = useRef(true)

  const [phase,     setPhase]     = useState('init')   // init | ready | countdown
  const [countNum,  setCountNum]  = useState(3)
  const [shotsDone, setShotsDone] = useState(0)
  const [flash,     setFlash]     = useState(false)

  const videoCallbackRef = useCallback((el) => {
    videoRef.current = el
    if (el && streamRef.current) {
      el.srcObject = streamRef.current
      el.play().catch(() => {})
    }
  }, [])

  useEffect(() => {
    aliveRef.current = true

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'user' } })
      .then(stream => {
        if (!aliveRef.current) { stream.getTracks().forEach(t => t.stop()); return }
        streamRef.current = stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.play().catch(() => {})
        }
        setPhase('ready')
      })
      .catch(() => { if (aliveRef.current) setPhase('ready') })

    return () => {
      aliveRef.current = false
      streamRef.current?.getTracks().forEach(t => t.stop())
    }
  }, [])

  const capturePhoto = () => {
    const v = videoRef.current
    const c = canvasRef.current
    if (!v || !c) return ''
    const slot  = frameConfig?.slots?.[0]
    const slotW = slot?.width  ?? 338
    const slotH = slot?.height ?? 236
    const ratio = slotW / slotH
    const vw = v.videoWidth  || 640
    const vh = v.videoHeight || 480
    let sx, sy, sw, sh
    if (vw / vh > ratio) {
      sh = vh; sw = sh * ratio; sy = 0; sx = (vw - sw) / 2
    } else {
      sw = vw; sh = sw / ratio; sx = 0; sy = (vh - sh) / 2
    }
    c.width  = slotW * 4
    c.height = slotH * 4
    const ctx = c.getContext('2d')
    ctx.save()
    ctx.filter = 'brightness(1.06) contrast(0.92) saturate(0.78) sepia(0.08)'
    ctx.translate(c.width, 0)
    ctx.scale(-1, 1)
    ctx.drawImage(v, sx, sy, sw, sh, 0, 0, c.width, c.height)
    ctx.restore()
    return c.toDataURL('image/jpeg', 0.92)
  }

  const shootRef = useRef(null)
  shootRef.current = () => {
    if (!aliveRef.current) return
    let n = 3
    setCountNum(n)
    setPhase('countdown')

    const id = setInterval(() => {
      if (!aliveRef.current) { clearInterval(id); return }
      n--
      if (n > 0) {
        setCountNum(n)
      } else {
        clearInterval(id)

        const url = capturePhoto()
        accRef.current = [...accRef.current, url]
        const done = accRef.current.length
        setShotsDone(done)
        setFlash(true)

        setTimeout(() => {
          if (!aliveRef.current) return
          setFlash(false)

          if (done >= 4) {
            streamRef.current?.getTracks().forEach(t => t.stop())
            onComplete([...accRef.current])
          } else {
            setPhase('ready')
            setTimeout(() => {
              if (aliveRef.current) shootRef.current()
            }, 500)
          }
        }, 200)
      }
    }, 1000)
  }

  const stopAndClose = () => {
    streamRef.current?.getTracks().forEach(t => t.stop())
    onClose()
  }

  const shooting = phase === 'countdown' || shotsDone > 0
  const isH = frameConfig?.type === 'horizontal'

  return (
    <div className="ph-root ph04-root">
      <div className="ph04-bg" />

      <button className="ph-close-btn" onClick={stopAndClose}>
        <img src={isH ? IMG_04H_CLOSE : IMG_04_CLOSE} alt="close" />
      </button>

      <div className={isH ? 'ph04h-white-top'       : 'ph04-white-top'} />
      <div className={isH ? 'ph04h-white-top-inner' : 'ph04-white-top-inner'} />

      <div className={isH ? 'ph04h-cam-wrap' : 'ph04-cam-wrap'}>
        <video
          ref={videoCallbackRef}
          autoPlay
          playsInline
          muted
          disablePictureInPicture
          className="ph04-video"
          style={{ pointerEvents: 'none', filter: 'brightness(1.06) contrast(0.92) saturate(0.78) sepia(0.08)' }}
        />
        {phase === 'countdown' && (
          <div className="ph04-countdown">{countNum}</div>
        )}
        {flash && <div className="ph04-flash" />}
      </div>

      <div className={isH ? 'ph04h-white-bot'       : 'ph04-white-bot'} />
      <div className={isH ? 'ph04h-white-bot-inner' : 'ph04-white-bot-inner'} />

      {phase === 'ready' && !shooting ? (
        <button className="ph04-start-btn" onClick={() => shootRef.current()}>
          촬영 시작
        </button>
      ) : shooting ? (
        <div className="ph04-dots">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className={`ph04-dot${i <= shotsDone ? ' filled' : ''}`} />
          ))}
        </div>
      ) : null}

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  )
}

// ─────────────────────────────────────────────────────
//  06  최종 결과
//  합성 순서: 흰 배경 → 사진(슬롯) → 프레임 overlay
// ─────────────────────────────────────────────────────
function Photo06({ photos, frameConfig, onDelete }) {
  const canvasRef = useRef(null)
  const [composited, setComposited] = useState(null)

  useEffect(() => {
    if (!photos.length) return
    const canvas = canvasRef.current
    if (!canvas) return

    let cancelled = false

    const run = async () => {
      try {
        const { src, width, height, slots } = frameConfig

        // 1) 캔버스 초기화 — 흰 배경
        canvas.width  = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, width, height)

        // 2) 슬롯에 사진 먼저 그리기
        const total = Math.min(photos.length, slots.length)
        for (let i = 0; i < total; i++) {
          if (cancelled) return
          const slot = slots[i]
          const pImg = await loadImage(photos[i])
          if (cancelled) return

          ctx.save()
          ctx.beginPath()
          ctx.rect(slot.x, slot.y, slot.width, slot.height)
          ctx.clip()

          // object-fit: cover
          const pr = pImg.naturalWidth / pImg.naturalHeight
          const sr = slot.width / slot.height
          let dw, dh, dx, dy
          if (pr > sr) {
            dh = slot.height; dw = dh * pr
            dy = slot.y;      dx = slot.x - (dw - slot.width) / 2
          } else {
            dw = slot.width;  dh = dw / pr
            dx = slot.x;      dy = slot.y - (dh - slot.height) / 2
          }
          ctx.drawImage(pImg, dx, dy, dw, dh)
          ctx.restore()
        }

        // 3) 프레임 PNG를 맨 위에 overlay
        if (cancelled) return
        const frameImg = await loadImage(src)
        if (cancelled) return
        ctx.drawImage(frameImg, 0, 0, width, height)

        if (!cancelled) {
          setComposited(canvas.toDataURL('image/png'))
        }
      } catch (e) {
        console.error('compositing error:', e)
      }
    }

    run()
    return () => { cancelled = true }
  }, [photos, frameConfig])

  const handleSave = () => {
    if (!composited) return
    const a = document.createElement('a')
    a.href = composited
    a.download = 'photo-strip.png'
    a.click()
  }

  return (
    <div className="ph-root ph06-root">
      <div className="ph06-bg" />

      <img className="ph06-done" src={IMG_DONE} alt="완성!" />

      {composited
        ? <img src={composited} className="ph06-canvas" alt="photo strip" />
        : <div className="ph06-loading">합성 중...</div>
      }

      <div className="ph06-btn-row">
        <button className="ph06-save-btn"   onClick={handleSave}>저장</button>
        <button className="ph06-delete-btn" onClick={onDelete}>나가기</button>
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  )
}

// ─────────────────────────────────────────────────────
//  06H  가로형 최종 결과 (03-4)
//  합성 순서: 흰 배경 → 사진(슬롯) → 프레임 overlay
// ─────────────────────────────────────────────────────
function Photo06H({ photos, frameConfig, onDelete }) {
  const canvasRef = useRef(null)
  const [composited, setComposited] = useState(null)

  useEffect(() => {
    if (!photos.length) return
    const canvas = canvasRef.current
    if (!canvas) return

    let cancelled = false

    const run = async () => {
      try {
        const { src, width, height, slots } = frameConfig

        canvas.width  = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, width, height)

        const total = Math.min(photos.length, slots.length)
        for (let i = 0; i < total; i++) {
          if (cancelled) return
          const slot = slots[i]
          const pImg = await loadImage(photos[i])
          if (cancelled) return

          ctx.save()
          ctx.beginPath()
          ctx.rect(slot.x, slot.y, slot.width, slot.height)
          ctx.clip()

          const pr = pImg.naturalWidth / pImg.naturalHeight
          const sr = slot.width / slot.height
          let dw, dh, dx, dy
          if (pr > sr) {
            dh = slot.height; dw = dh * pr
            dy = slot.y;      dx = slot.x - (dw - slot.width) / 2
          } else {
            dw = slot.width;  dh = dw / pr
            dx = slot.x;      dy = slot.y - (dh - slot.height) / 2
          }
          ctx.drawImage(pImg, dx, dy, dw, dh)
          ctx.restore()
        }

        if (cancelled) return
        const frameImg = await loadImage(src)
        if (cancelled) return
        ctx.drawImage(frameImg, 0, 0, width, height)

        if (!cancelled) {
          setComposited(canvas.toDataURL('image/png'))
        }
      } catch (e) {
        console.error('compositing error:', e)
      }
    }

    run()
    return () => { cancelled = true }
  }, [photos, frameConfig])

  const handleSave = () => {
    if (!composited) return
    const a = document.createElement('a')
    a.href = composited
    a.download = 'photo-strip-horizontal.png'
    a.click()
  }

  return (
    <div className="ph-root ph06-root">
      <div className="ph06-bg" />

      <img className="ph06h-done" src={IMG_06H_DONE} alt="완성!" />

      {composited
        ? <img src={composited} className="ph06h-canvas" alt="photo strip" />
        : <div className="ph06-loading">합성 중...</div>
      }

      <div className="ph06-btn-row">
        <button className="ph06-save-btn"   onClick={handleSave}>저장</button>
        <button className="ph06-delete-btn" onClick={onDelete}>나가기</button>
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  )
}

// ─────────────────────────────────────────────────────
//  루트
// ─────────────────────────────────────────────────────
export default function Photo({ onNavigate }) {
  const [step,          setStep]          = useState(1)
  const [selectedFrame, setSelectedFrame] = useState(0)
  const [portraitIdx,   setPortraitIdx]   = useState(0)
  const [photos,        setPhotos]        = useState([])

  const frameConfig = FRAME_CONFIGS[selectedFrame] ?? FRAME_CONFIGS[0]

  return (
    <>
      {step === 1 && (
        <Photo01 onNext={() => setStep(2)} onNavigate={onNavigate} />
      )}
      {step === 2 && (
        <Photo02
          onFrames={() => setStep(3)}
          onShoot={() => setStep(4)}
          onClose={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <Photo03
          initIdx={portraitIdx}
          onConfirm={idx => { setPortraitIdx(idx); setSelectedFrame(idx); setStep(4) }}
          onClose={() => setStep(2)}
          onLandscape={() => setStep(35)}
        />
      )}
      {step === 35 && (
        <Photo03H
          onConfirm={() => { setSelectedFrame(6); setStep(4) }}
          onClose={() => setStep(2)}
          onPortrait={() => setStep(3)}
        />
      )}
      {step === 4 && (
        <Photo04
          frameConfig={frameConfig}
          onComplete={pics => {
            setPhotos(pics)
            setStep(frameConfig.type === 'horizontal' ? 7 : 6)
          }}
          onClose={() => setStep(2)}
        />
      )}
      {step === 6 && (
        <Photo06
          photos={photos}
          frameConfig={frameConfig}
          onDelete={() => { setPhotos([]); setStep(1) }}
        />
      )}
      {step === 7 && (
        <Photo06H
          photos={photos}
          frameConfig={frameConfig}
          onDelete={() => { setPhotos([]); setStep(1) }}
        />
      )}
    </>
  )
}
