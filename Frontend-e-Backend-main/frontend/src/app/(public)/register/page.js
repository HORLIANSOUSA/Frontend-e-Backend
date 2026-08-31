import RegisterForm from "@/components/ui/register-form";

export default function Register() {
  return (
    <div className="grid min-h-[calc(100vh-5rem)] items-center gap-10 bg-background p-6 md:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] md:p-10 lg:gap-20 lg:p-16">
      <section className="mx-auto hidden w-full max-w-2xl space-y-6 md:block">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Cuidado que acompanha voce
          </p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
            Sua saude merece uma rotina mais simples.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
            Organize medicamentos, planos e relatorios em um unico lugar com a Manifast.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/download2.jpg"
            alt="Equipe de profissionais da saude"
            className="h-52 w-full rounded-2xl object-cover"
          />
          <img
            src="/download3.jpg"
            alt="Medicamentos organizados sobre uma mesa"
            className="mt-8 h-52 w-full rounded-2xl object-cover"
          />
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-red-100 bg-red-50 p-4">
          <img
            src="/download.png"
            alt="Simbolo de saude"
            className="h-14 w-14 rounded-full object-cover"
          />
          <p className="text-sm leading-6 text-red-950">
            Informacao organizada para decisoes de saude mais tranquilas.
          </p>
        </div>
      </section>
      <div className="mx-auto w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
}
