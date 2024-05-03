export default function useLoaderButton() {
  let prevText
  let btnEvent

  const startLoad = async (ev) => {
    prevText = ev.target.textContent
    btnEvent = ev

    ev.target.style.transition = "1s"
    ev.target.textContent = "درحال افزودن..."
    ev.target.style.opacity = "50%"
    ev.target.disabled = true
  }

  const endLoad = () => {
    btnEvent.target.textContent = prevText
    btnEvent.target.style.opacity = "100%"
    btnEvent.target.disabled = false
  }

  return [startLoad, endLoad]
}
