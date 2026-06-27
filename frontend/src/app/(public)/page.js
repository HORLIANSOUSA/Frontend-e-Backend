import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center h-[calc(100vh-5rem)] max-h-screen">
      <div className="pb-8">
        <h1 className="text-5xl font-extrabold mb-1.5 text-center">
         Cuidando da sua saúde com confiança
        </h1>
         <h2 className="text-3xl font-semibold mb-10 text-center">
          Nossa plataforma foi desenvolvida para conectar pacientes e profissionais da saúde, oferecendo acesso fácil a informações sobre medicamentos, indicações, cuidados de uso e acompanhamento médico. Aqui, você encontra conteúdos atualizados para auxiliar na promoção da saúde e do bem-estar, sempre com responsabilidade e segurança.
        </h2>
      </div>
      
    </section>
  );
}
