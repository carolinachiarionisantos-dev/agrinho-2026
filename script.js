document.body.innerHTML = `
<header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2 text-green-600 font-bold text-xl">
            <i data-lucide="sprout" class="w-8 h-8"></i>
            <span>Agro Sustentável</span>
        </div>

        <nav class="hidden md:flex space-x-6 text-gray-600 font-medium">
            <a href="#inicio" class="hover:text-green-600 transition">Início</a>
            <a href="#producao" class="hover:text-green-600 transition">Produção Agrícola</a>
            <a href="#sustentabilidade" class="hover:text-green-600 transition">Sustentabilidade</a>
            <a href="#desafios" class="hover:text-green-600 transition">Desafios</a>
            <a href="#solucoes" class="hover:text-green-600 transition">Soluções e Futuro</a>
            <a href="#contato" class="hover:text-green-600 transition">Contato</a>
        </nav>

        <button class="md:hidden text-gray-600">
            <i data-lucide="menu" class="w-6 h-6"></i>
        </button>
    </div>
</header>

<section id="inicio" class="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-24 px-6 overflow-hidden">
    <div class="absolute inset-0 opacity-20 bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1625246333195-78d9c38ad451?auto=format&fit=crop&w=1920&q=80');">
    </div>

    <div class="container mx-auto relative z-10 max-w-4xl text-center">
        <div class="flex justify-center space-x-4 mb-6 text-green-300">
            <i data-lucide="sun" class="w-8 h-8"></i>
            <i data-lucide="cpu" class="w-8 h-8"></i>
            <i data-lucide="tractor" class="w-8 h-8"></i>
        </div>

        <h1 class="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Produzir mais hoje, preservando o amanhã.
        </h1>

        <p class="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            O agronegócio é um dos principais setores da economia brasileira.
            Com o uso de tecnologias sustentáveis, é possível aumentar a produção
            de alimentos e preservar os recursos naturais para as futuras gerações.
        </p>

        <a href="#producao"
            class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition">
            Saiba Mais
        </a>
    </div>
</section>
`;

// Ativa os ícones Lucide
lucide.createIcons();
