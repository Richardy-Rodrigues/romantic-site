import "./App.css";
import CarouselPage from "./pages/CarouselPage";
import simplesmente_acontece from "./assets/videos/simplesmente_acontece_declaracao.mp4";
import bg_mar from "@/assets/videos/ondas_na_praia.mp4";
import videoedit from "@/assets/videos/videonosso.mp4";
import videodamonelena from "@/assets/videos/damoneelena.mp4";

export default function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden">
      {/* background video: fixed to viewport, fills screen */}
      <video
        src={bg_mar}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="fixed inset-0 z-0 w-full h-full object-cover"
      />

      {/* subtle overlay to improve contrast */}
      <div className="fixed inset-0 z-10 bg-black/30 pointer-events-none" />

      {/* foreground content above the video */}
      <div className="relative z-20 flex flex-col items-center justify-start p-8 w-full">
        <video
          src={simplesmente_acontece}
          autoPlay
          controls
          loop
          className="max-w-full"
        />
        <CarouselPage />
        <h1 className="top-8 z-20 text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          I Love You 💖
        </h1>
        <div>
          <span className="text-white text-lg md:text-xl lg:text-2xl font-serif mt-8">
            Oie, meu amor 💖 Hoje, senti uma vontade imensa de colocar em
            palavras o que enche meu coração. Quero te dizer o quanto eu te amo
            — e mesmo que o universo inteiro se unisse para medir esse amor,
            ainda assim seria impossível. O que sinto por você é imensurável, é
            infinito, é algo que ultrapassa qualquer explicação da razão. Desde
            que você entrou na minha vida, tudo ganhou cor, luz e sentido. É
            como se o mundo tivesse finalmente encontrado seu ritmo perfeito no
            compasso do seu sorriso. Como disse William Shakespeare — precisei
            pesquisar o nome dele kkk: "Dúvida da luz dos astros, de que o sol
            tenha calor, dúvida até da verdade, mas confia em meu amor." Essas
            palavras são a tradução exata do que sinto. Pode duvidar de tudo,
            menos do meu amor por você. Você é o nascer do sol que ilumina meus
            dias e a lua que acalma minhas noites. Quando te abraço, o mundo se
            cala, e só existe a paz. Quando te beijo, o tempo para e tudo o que
            importa é aquele momento, em que somos apenas nós dois. Se eu
            pudesse, escreveria seu nome nas estrelas para que o céu inteiro
            soubesse o quanto te amo. E se um dia me faltassem as palavras,
            ainda assim o meu olhar te contaria o quanto você é essencial pra
            mim. Dizem que o amor é fogo que arde sem se ver, ferida que dói e
            não se sente… E é verdade: o amor que sinto por você é chama eterna,
            suave e intensa ao mesmo tempo é paz e tempestade, é sonho e
            realidade. Você é o amor da minha vida, meu destino, meu lar. Quero
            envelhecer ao seu lado, rindo das nossas lembranças, juntando
            momentos e escrevendo uma história que nem o tempo será capaz de
            apagar. E se algum dia a vida nos testar, lembre-se disso: Mesmo que
            o sol se apague e as estrelas adormeçam, o meu amor por você
            continuará brilhando, porque ele não vive do tempo, mas da
            eternidade que existe em cada batida do meu coração. Te amo mais do
            que todas as palavras podem dizer, Mais do que todos os versos já
            escritos, Mais do que qualquer sonho já sonhado. Eu te amo💖
          </span>
        </div>

        <div className="mt-8 w-full max-w-2xl">
          <video src={videoedit} controls></video>
        </div>

        <div className="text-white text-lg md:text-xl lg:text-2xl font-serif mt-8">
          <span>
            <br />
            Te amo para sempre e além! 💖
            <br />
            Agora fica com um videozinho!! TVD - Damon e Elena
          </span>
        </div>
        <div className="mt-8 w-full max-w-2xl">
          <video src={videodamonelena} controls></video>
        </div>
      </div>
    </div>
  );
}
