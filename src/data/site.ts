export const site = {
  name: 'cuidoka',
  description: 'Uma casa na internet para trabalhos, ideias e histórias. Pode entrar.',
  github: 'https://github.com/Cuidoka',
  repository: 'https://github.com/Cuidoka/myhome',
};

export const rooms = [
  { slug: 'entrada', href: '/', name: 'Entrada', detail: 'a parede', icon: 'home', color: 'paper', introduction: '', empty: '' },
  { slug: 'estudio', href: '/estudio/', name: 'Estúdio', detail: 'músicas e trilhas', icon: 'cassette', color: 'clay', introduction: 'Um canto para as músicas. As que contam histórias e as que só querem existir.', empty: 'As primeiras faixas ainda estão sendo escolhidas. Quando chegarem, cada uma vai ter seu lugar por aqui.' },
  { slug: 'oficina', href: '/oficina/', name: 'Oficina', detail: 'código e experiências', icon: 'tools', color: 'sand', introduction: 'Uma bancada para projetos, ferramentas e ideias que pedem para sair do papel.', empty: 'A bancada está sendo arrumada. Em breve, os projetos vão chegar com suas histórias e os caminhos para experimentar.' },
  { slug: 'sotao', href: '/sotao/', name: 'Sótão', detail: 'rpg e mundos', icon: 'dice', color: 'sage', introduction: 'Um lugar para guardar mundos. Mapas, personagens e histórias que continuam depois da mesa.', empty: 'Os primeiros baús ainda estão sendo organizados. Os mundos vão ganhar mapas e histórias por aqui.' },
  { slug: 'sala', href: '/sala/', name: 'Sala', detail: 'textos e pensamentos', icon: 'book', color: 'paper', introduction: 'Textos, pensamentos e ideias pela metade. Pega uma xícara e senta.', empty: 'Os primeiros textos estão a caminho. A estante fica pronta aos poucos, uma ideia de cada vez.' },
  { slug: 'galeria', href: '/galeria/', name: 'Galeria', detail: 'artes e fotografias', icon: 'frame', color: 'sage', introduction: 'Uma parede para imagens. Desenhos, estudos e fotografias, cada um do seu jeito.', empty: 'As molduras estão esperando as primeiras escolhas. As obras e fotografias vão chegar aos poucos.' },
] as const;

export type RoomSlug = typeof rooms[number]['slug'];
export type ContentRoom = Exclude<RoomSlug, 'entrada'>;
export type IconName = typeof rooms[number]['icon'] | 'arrow' | 'github';

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
