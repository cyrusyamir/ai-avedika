import { useForm } from '../context/FormContext'

export default function CTASection() {
  const { openForm } = useForm()
  return (
    <section id="cta" className="p-3 sm:p-4 md:p-6 pt-10 sm:pt-14 pb-8 sm:pb-10">
      <div className="rounded-2xl sm:rounded-3xl bg-black text-white p-8 sm:p-12 md:p-16 shadow-xl flex flex-col items-center text-center gap-5">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Let's build your next dataset
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl">
          Tell us about your project and we'll put together a plan — collection, transcription or
          annotation at scale, with quality you can verify.
        </p>
        <button
          type="button"
          onClick={openForm}
          className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-xl border border-transparent hover:bg-gray-200 active:bg-transparent active:text-white active:border-white transition-colors"
        >
          Start a project
        </button>
      </div>
    </section>
  )
}
