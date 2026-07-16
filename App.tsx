import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Lock, 
  Search, 
  Mic, 
  Bell, 
  SlidersHorizontal, 
  Calendar, 
  Clock, 
  ChevronLeft, 
  Star,
  Check,
  ArrowRight,
  Info,
  Heart,
  Smile,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck2
} from 'lucide-react';

// Slides do Onboarding
const ONBOARDING_SLIDES = [
  {
    image: '/img/foto-santacasa.png',
    title: 'Um Sonho de Solidariedade',
    description: 'Desde o início, a Santa Casa foi mais do que um simples hospital. Ela nasceu do desejo de criar um espaço onde a dignidade humana fosse respeitada, e onde todos, independentemente de suas condições sociais ou econômicas, pudessem encontrar alívio para suas dores e preocupações.'
  },
  {
    image: '/img/doctor_onboarding_1.jpg',
    title: 'Consulta com Médicos',
    description: 'Tenha acesso ao corpo clínico mais qualificado e experiente da cidade, pronto para oferecer atendimento de excelência com a confiança tradicional da Santa Casa.'
  },
  {
    image: '/img/doctor_onboarding_2.jpg',
    title: 'Encontre especialistas',
    description: 'Busque e agende de forma simples consultas com os melhores especialistas de saúde preparados para atender você.'
  },
  {
    image: '/img/doctor_onboarding_3.jpg',
    title: 'Atendimento humanizado',
    description: 'Tenha acesso a um atendimento médico centrado em você, com foco em cuidado, segurança e empatia.'
  }
];

// Dados dos Médicos para a tela de busca
const DOCTORS_DATA = [
  {
    id: 1,
    name: 'Dr. Adam Max',
    specialty: 'Psicólogo',
    time: '10:00',
    price: '90',
    rating: '4.9',
    availableSlots: 5,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=256&h=256&q=80',
    days: [
      { dayName: 'Sáb', dayNum: 3, available: true },
      { dayName: 'Dom', dayNum: 4, available: false },
      { dayName: 'Seg', dayNum: 5, available: true },
      { dayName: 'Ter', dayNum: 6, available: true },
      { dayName: 'Qua', dayNum: 7, available: true },
      { dayName: 'Qui', dayNum: 8, available: true }
    ]
  },
  {
    id: 2,
    name: 'Dr. Max Brad',
    specialty: 'Ortopedista',
    time: '10:00',
    price: '120',
    rating: '4.8',
    availableSlots: 3,
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=256&h=256&q=80',
    days: [
      { dayName: 'Sáb', dayNum: 3, available: false },
      { dayName: 'Dom', dayNum: 4, available: true },
      { dayName: 'Seg', dayNum: 5, available: true },
      { dayName: 'Ter', dayNum: 6, available: false },
      { dayName: 'Qua', dayNum: 7, available: true },
      { dayName: 'Qui', dayNum: 8, available: true }
    ]
  },
  {
    id: 3,
    name: 'Dra. Sarah Jenkins',
    specialty: 'Pediatra',
    time: '14:30',
    price: '110',
    rating: '5.0',
    availableSlots: 4,
    avatar: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=256&h=256&q=80',
    days: [
      { dayName: 'Sáb', dayNum: 3, available: true },
      { dayName: 'Dom', dayNum: 4, available: true },
      { dayName: 'Seg', dayNum: 5, available: false },
      { dayName: 'Ter', dayNum: 6, available: true },
      { dayName: 'Qua', dayNum: 7, available: true },
      { dayName: 'Qui', dayNum: 8, available: false }
    ]
  }
];

const App: React.FC = () => {
  // Telas da aplicação: 'onboarding' | 'login' | 'find_doctor'
  const [currentScreen, setCurrentScreen] = useState<'onboarding' | 'login' | 'find_doctor'>('onboarding');
  
  // Estados do Onboarding
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Estados do Login
  const [cpf, setCpf] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckingData, setIsCheckingData] = useState(false);
  const [showAccessCode, setShowAccessCode] = useState(false);
  const [checkMessage, setCheckMessage] = useState('');

  // Solicitar acesso (checar dados por 5 segundos)
  const handleRequestAccess = () => {
    const rawCpf = cpf.replace(/\D/g, '');
    if (rawCpf.length !== 11) {
      setLoginError('Por favor, informe um CPF válido.');
      return;
    }
    
    setLoginError('');
    setIsCheckingData(true);
    setCheckMessage('Aguarde, estamos checando os dados do paciente para o CPF informado...');
    
    setTimeout(() => {
      setIsCheckingData(false);
      setCheckMessage('');
      setShowAccessCode(true);
    }, 5000);
  };
  
  // Estados do Buscar Médico
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [selectedDays, setSelectedDays] = useState<{ [doctorId: number]: number }>({ 1: 3, 2: 4, 3: 3 });
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);
  
  // Efeito para limpar mensagens de sucesso
  useEffect(() => {
    if (bookingSuccess) {
      const timer = setTimeout(() => setBookingSuccess(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [bookingSuccess]);

  // Efeito para passar o slide do carrossel automaticamente a cada 10 segundos
  useEffect(() => {
    if (currentScreen !== 'onboarding') return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % ONBOARDING_SLIDES.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [currentScreen, activeSlide]);


  // Formatar CPF
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      setCpf(value);
      setLoginError('');
    }
  };

  // Validar Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCpf = cpf.replace(/\D/g, '');
    if (rawCpf.length !== 11) {
      setLoginError('Por favor, informe um CPF válido.');
      return;
    }
    if (!accessCode.trim()) {
      setLoginError('Informe o código de acesso recebido via WhatsApp.');
      return;
    }
    
    setIsSubmitting(true);
    // Simulação de login de 1 segundo
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentScreen('find_doctor');
    }, 1000);
  };

  // Tratar Agendamento
  const handleBookAppointment = (doctorName: string, doctorId: number) => {
    const selectedDayNum = selectedDays[doctorId];
    const doctor = DOCTORS_DATA.find(d => d.id === doctorId);
    const dayObj = doctor?.days.find(d => d.dayNum === selectedDayNum);
    
    if (dayObj) {
      setBookingSuccess(`Consulta agendada com o ${doctorName} para dia ${selectedDayNum} (Janeiro) às ${doctor?.time} com sucesso!`);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-slate-900 font-sans text-slate-100 overflow-x-hidden antialiased">
      
      {/* PAINEL INSTITUCIONAL (Visível apenas em Desktop/Telas Médias) */}
      <div className="hidden lg:flex w-7/12 flex-col justify-between p-12 bg-gradient-to-br from-[#3f0003] via-[#200002] to-[#120001] border-r border-[#601010]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-800/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl -z-10" />

        {/* Logo Santa Casa & Conecta Saúde */}
        <div className="flex items-center space-x-4">
          <img 
            src="/img/logo-hsc-branco.png" 
            alt="Logo Santa Casa" 
            className="h-12 object-contain" 
          />
          <div className="h-8 w-px bg-white/20" />
          <span className="text-xl font-bold tracking-wider text-rose-100 font-sans uppercase">
            Conecta Saúde
          </span>
        </div>

        {/* Apresentação Principal */}
        <div className="my-auto max-w-lg space-y-6">
          <h1 className="text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-white font-sans">
            Saúde digital, <br />
            <span className="text-red-400">cuidado humanizado</span> para todos.
          </h1>
          <p className="text-lg text-rose-100/70 leading-relaxed">
            O Conecta Saúde traz a qualidade tradicional da Santa Casa para a palma da sua mão. 
            Consulte especialistas, agende exames e gerencie seus prontuários de forma integrada e segura.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <Smile className="h-6 w-6 text-red-400 mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-white">Foco na Experiência</h4>
                <p className="text-sm text-rose-100/60 mt-1">Desenvolvido com foco no paciente.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <ShieldCheck className="h-6 w-6 text-red-400 mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-white">Privacidade & LGPD</h4>
                <p className="text-sm text-rose-100/60 mt-1">Criptografia de dados de ponta a ponta.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Institucional */}
        <div className="flex justify-between items-center text-xs text-rose-100/40">
          <p>© 2026 Conecta Saúde • Hospital Santa Casa</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-red-300 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>

      {/* PAINEL DO SMARTPHONE (Responsivo, Mobile-First) */}
      <div className="flex-1 flex items-center justify-center p-0 sm:p-6 md:p-8 bg-[#130d0d] lg:bg-slate-950">
        
        {/* Smartphone Frame Simulator no Desktop */}
        <div className="w-full h-screen sm:h-[880px] sm:max-w-[412px] bg-white text-[#231918] sm:rounded-[40px] sm:shadow-2xl sm:border-[10px] sm:border-slate-800 relative overflow-hidden flex flex-col justify-between">
          
          {/* Status Bar / Notch Simulator (Apenas no Desktop) */}
          <div className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-2xl z-50">
            <div className="w-3 h-3 rounded-full bg-slate-900 mx-auto mt-1" />
          </div>

          {/* INDICADOR DE NOTIFICAÇÃO DO SISTEMA (Booking/Agendamento) */}
          <AnimatePresence>
            {bookingSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 16 }}
                exit={{ opacity: 0, y: -50 }}
                className="absolute top-12 left-4 right-4 bg-emerald-50 border border-emerald-200 text-emerald-900 p-4 rounded-2xl shadow-lg z-50 flex items-start space-x-3"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-emerald-950">Sucesso no Agendamento</h4>
                  <p className="text-xs text-emerald-800 leading-snug">{bookingSuccess}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CONTEÚDO PRINCIPAL (TELA ATIVA) */}
          <div className="flex-1 flex flex-col relative w-full h-full overflow-hidden select-none">
            <AnimatePresence mode="wait">
              
              {/* 1. TELA: ONBOARDING */}
              {currentScreen === 'onboarding' && (
                <motion.div
                  key="onboarding"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col justify-between w-full h-full relative"
                >
                  {/* Botão Pular */}
                  <div className="absolute top-6 right-6 z-20">
                    <button 
                      onClick={() => setCurrentScreen('login')}
                      className="text-xs font-semibold uppercase tracking-wider text-white/90 hover:text-white bg-black/30 hover:bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full transition-all"
                    >
                      Pular
                    </button>
                  </div>

                  {/* Imagem de Fundo (Metade Superior) */}
                  <div className="w-full h-[50%] relative overflow-hidden shrink-0 bg-slate-200">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeSlide}
                        src={ONBOARDING_SLIDES[activeSlide].image}
                        alt={ONBOARDING_SLIDES[activeSlide].title}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    {/* Gradiente sutil para escurecer o topo onde fica o botão pular */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
                  </div>

                  {/* Card Inferior (Bottom Sheet de Conteúdo) */}
                  <div className="flex-1 bg-white -mt-10 rounded-t-[40px] shadow-[0_-8px_30px_rgba(0,0,0,0.06)] px-8 pt-8 pb-6 flex flex-col justify-between relative z-10 border-t border-[#dcc0bd]/30">
                    
                    {/* Título & Descrição */}
                    <div className="space-y-4 text-center mt-2">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeSlide}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          <h2 className="text-[28px] font-bold tracking-tight text-[#231918] leading-tight">
                            {ONBOARDING_SLIDES[activeSlide].title.split(' ').map((word, i) => (
                              <React.Fragment key={i}>
                                {word} {i === 0 && activeSlide === 0 ? <br /> : ''}
                              </React.Fragment>
                            ))}
                          </h2>
                          <p className="text-sm text-[#564240]/80 leading-relaxed font-normal px-1">
                            {ONBOARDING_SLIDES[activeSlide].description}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Dots / Indicador de Paginação */}
                    <div className="flex justify-center items-center space-x-2 my-4">
                      {ONBOARDING_SLIDES.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setActiveSlide(index)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            activeSlide === index ? 'w-6 bg-[#601010]' : 'w-2.5 bg-[#dcc0bd]'
                          }`}
                          aria-label={`Ir para o slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Botão de Ação */}
                    <div className="w-full">
                      <button
                        onClick={() => {
                          if (activeSlide < ONBOARDING_SLIDES.length - 1) {
                            setActiveSlide(activeSlide + 1);
                          } else {
                            setCurrentScreen('login');
                          }
                        }}
                        className="w-full py-4 bg-[#601010] hover:bg-[#4d0c0c] text-white font-semibold text-base rounded-[24px] shadow-[0_8px_20px_rgba(96,16,16,0.2)] hover:shadow-none hover:translate-y-[1px] transition-all flex items-center justify-center space-x-2"
                      >
                        <span>{activeSlide === ONBOARDING_SLIDES.length - 1 ? 'Começar Agora' : 'Próximo'}</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* 2. TELA: LOGIN */}
              {currentScreen === 'login' && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex-1 flex flex-col bg-white w-full h-full relative px-6 py-6"
                >
                  {/* Cabeçalho */}
                  <div className="flex items-center space-x-3 w-full mb-6">
                    <button 
                      onClick={() => setCurrentScreen('onboarding')}
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[#dcc0bd]/40 hover:bg-slate-50 transition-colors shadow-sm shrink-0"
                      aria-label="Voltar para Onboarding"
                    >
                      <ChevronLeft className="h-5 w-5 text-[#231918]" />
                    </button>
                    <h3 className="text-[24px] font-bold tracking-tight text-[#231918]">
                      Entrar
                    </h3>
                  </div>

                  {/* Logo & Boas-vindas */}
                  <div className="flex flex-col items-center text-center space-y-5 my-4">
                    <img 
                      src="/img/logo-conectasaude-fundobranco-transparente.png" 
                      alt="Conecta Saúde Logo" 
                      className="h-20 object-contain"
                    />
                    <div className="space-y-1 px-10">
                      <h2 className="text-2xl font-extrabold text-[#231918] tracking-tight">
                        Bem-vindo de volta
                      </h2>
                    </div>
                  </div>

                  {/* Formulário */}
                  <form onSubmit={handleLoginSubmit} className="flex-1 flex flex-col justify-between mt-4">
                    <div className="space-y-5">
                      
                      {/* Campo CPF */}
                      <div className="space-y-2">
                        <label htmlFor="cpf-input" className="text-xs font-bold text-[#231918] uppercase tracking-wide">
                          Informe seu CPF
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#564240]/50">
                            <User className="h-5 w-5" />
                          </span>
                          <input
                            id="cpf-input"
                            type="text"
                            placeholder="Digite seu CPF"
                            value={cpf}
                            onChange={handleCpfChange}
                            className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#dcc0bd] focus:border-[#601010] focus:ring-2 focus:ring-[#601010]/20 rounded-xl outline-none text-sm text-[#231918] transition-all"
                            required
                          />
                        </div>
                      </div>

                      {/* Botão Solicitar Acesso */}
                      {!showAccessCode && (
                        <div className="pt-1">
                          <button
                            type="button"
                            onClick={handleRequestAccess}
                            disabled={isCheckingData || cpf.replace(/\D/g, '').length !== 11}
                            className={`w-full py-4 font-semibold text-sm rounded-[24px] transition-all flex items-center justify-center space-x-1.5 ${
                              cpf.replace(/\D/g, '').length === 11 && !isCheckingData
                                ? 'bg-[#601010] text-white hover:bg-[#4d0c0c] shadow-[0_8px_20px_rgba(96,16,16,0.15)] active:scale-[0.99] cursor-pointer'
                                : 'bg-slate-100 text-slate-400 border border-slate-200/50 pointer-events-none'
                            }`}
                          >
                            {isCheckingData ? (
                              <>
                                <div className="w-3.5 h-3.5 border-2 border-[#601010] border-t-transparent rounded-full animate-spin mr-1" />
                                <span>Solicitando Acesso...</span>
                              </>
                            ) : (
                              <span>Solicitar Acesso</span>
                            )}
                          </button>
                        </div>
                      )}

                      {/* Mensagem de checagem de dados (visível por 5s) */}
                      {isCheckingData && checkMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs flex items-start space-x-2"
                        >
                          <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>{checkMessage}</span>
                        </motion.div>
                      )}

                      {/* Campo Código de Acesso */}
                      {showAccessCode && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="space-y-2 overflow-hidden"
                        >
                          <label htmlFor="code-input" className="text-xs font-bold text-[#231918] uppercase tracking-wide">
                            Código de acesso
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#564240]/50">
                              <Lock className="h-5 w-5" />
                            </span>
                            <input
                              id="code-input"
                              type="password"
                              placeholder="Digite o código do WhatsApp"
                              value={accessCode}
                              onChange={(e) => {
                                setAccessCode(e.target.value);
                                setLoginError('');
                              }}
                              className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#dcc0bd] focus:border-[#601010] focus:ring-2 focus:ring-[#601010]/20 rounded-xl outline-none text-sm text-[#231918] transition-all"
                              required
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Mensagem de Erro */}
                      {loginError && (
                        <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs">
                          <Info className="h-4 w-4 shrink-0" />
                          <span>{loginError}</span>
                        </div>
                      )}

                    </div>

                    {/* Botão Entrar */}
                    <div className="space-y-4 pt-6">
                      <button
                        type="submit"
                        disabled={!showAccessCode || isSubmitting}
                        className="w-full py-4 bg-[#601010] hover:bg-[#4d0c0c] disabled:bg-[#dcc0bd] disabled:cursor-not-allowed disabled:shadow-none text-white font-semibold text-sm rounded-[24px] shadow-[0_8px_20px_rgba(96,16,16,0.15)] transition-all flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Entrar</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-[#564240]/70">
                        Não recebeu o código?{' '}
                        <button 
                          type="button" 
                          disabled={!showAccessCode}
                          className={`font-bold hover:underline ${showAccessCode ? 'text-[#601010]' : 'text-slate-400 cursor-not-allowed'}`}
                        >
                          Reenviar no WhatsApp
                        </button>
                      </p>
                    </div>

                  </form>
                </motion.div>
              )}

              {/* 3. TELA: BUSCAR MÉDICO */}
              {currentScreen === 'find_doctor' && (
                <motion.div
                  key="find_doctor"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex-1 flex flex-col bg-white w-full h-full relative"
                >
                  {/* Cabeçalho Fixo */}
                  <div className="px-6 pt-6 pb-4 bg-white border-b border-[#dcc0bd]/30 sticky top-0 z-20 space-y-4">
                    <div className="flex items-center justify-between w-full">
                      <button 
                        onClick={() => setCurrentScreen('login')}
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[#dcc0bd]/40 hover:bg-slate-50 transition-colors shadow-sm"
                        aria-label="Voltar para Login"
                      >
                        <ChevronLeft className="h-5 w-5 text-[#231918]" />
                      </button>
                      <h3 className="text-base font-bold text-[#231918] tracking-tight">Buscar Médico</h3>
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[#dcc0bd]/40 relative">
                        <Bell className="h-5 w-5 text-[#231918]" />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#601010] rounded-full" />
                      </div>
                    </div>

                    {/* Barra de Pesquisa */}
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#564240]/50">
                          <Search className="h-5 w-5" />
                        </span>
                        <input
                          type="text"
                          placeholder="Psicólogo - Ansiedade"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-11 pr-4 py-3 bg-white border border-[#dcc0bd] focus:border-[#601010] rounded-xl outline-none text-xs text-[#231918] transition-all"
                        />
                      </div>
                      <button 
                        className="h-10 w-10 flex items-center justify-center bg-[#601010] text-white rounded-xl shadow-md hover:bg-[#4d0c0c] transition-colors"
                        aria-label="Gravar áudio de busca"
                      >
                        <Mic className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Área Rolável */}
                  <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5" style={{ maxHeight: 'calc(100vh - 140px)' }}>
                    
                    {/* Cabeçalho de Resultados */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#231918]">
                        {DOCTORS_DATA.filter(doc => 
                          doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.specialty.toLowerCase().includes(searchQuery.toLowerCase())
                        ).length} Médicos Encontrados
                      </span>
                      <button 
                        className="h-9 w-9 flex items-center justify-center rounded-lg border border-[#dcc0bd] bg-white text-[#564240]"
                        aria-label="Filtros avançados"
                      >
                        <SlidersHorizontal className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Especialidades Rápidas */}
                    <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide">
                      {['Todos', 'Psicólogo', 'Pediatra', 'Ortopedista'].map((specialty) => {
                        const isSelected = selectedSpecialty === specialty || (specialty === 'Todos' && selectedSpecialty === null);
                        return (
                          <button
                            key={specialty}
                            onClick={() => setSelectedSpecialty(specialty === 'Todos' ? null : specialty)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                              isSelected 
                                ? 'bg-[#601010] text-white shadow-sm' 
                                : 'bg-white border border-[#dcc0bd]/50 text-[#564240] hover:bg-slate-50'
                            }`}
                          >
                            {specialty}
                          </button>
                        );
                      })}
                    </div>

                    {/* Lista de Médicos */}
                    <div className="space-y-4">
                      {DOCTORS_DATA
                        .filter(doc => {
                          const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                                doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
                          const matchesSpecialty = selectedSpecialty === null || doc.specialty === selectedSpecialty;
                          return matchesSearch && matchesSpecialty;
                        })
                        .map((doctor) => (
                          <motion.div
                            key={doctor.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white border border-[#dcc0bd]/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4"
                          >
                            {/* Linha do Médico */}
                            <div className="flex space-x-3.5">
                              {/* Avatar */}
                              <img 
                                src={doctor.avatar} 
                                alt={doctor.name} 
                                className="w-14 h-14 rounded-xl object-cover border border-[#dcc0bd]/40" 
                              />
                              {/* Dados Básicos */}
                              <div className="flex-1 min-w-0">
                                <span className="text-[11px] font-bold text-[#601010]/80 uppercase tracking-wide">
                                  {doctor.specialty}
                                </span>
                                <h4 className="text-sm font-extrabold text-[#231918] truncate mt-0.5">
                                  {doctor.name}
                                </h4>
                                
                                <div className="flex items-center space-x-3 mt-1.5 text-xs text-[#564240]">
                                  <div className="flex items-center text-[#e7766d] font-semibold">
                                    <Star className="h-3.5 w-3.5 fill-[#e7766d] stroke-none mr-0.5" />
                                    <span>{doctor.rating}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="h-3.5 w-3.5 text-[#564240]/60 mr-1" />
                                    <span>{doctor.time}</span>
                                  </div>
                                  <div className="font-semibold text-[#231918]">
                                    R$ {doctor.price} <span className="text-[10px] text-[#564240] font-normal">/ hora</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Badge Horários */}
                            <div className="flex items-center space-x-1.5 py-1 px-2.5 bg-[#fdeae7] rounded-lg w-fit">
                              <span className="w-1.5 h-1.5 bg-[#601010] rounded-full" />
                              <span className="text-[10px] font-bold text-[#601010]">
                                {doctor.availableSlots} Horários Disponíveis
                              </span>
                            </div>

                            {/* Seção Agendamento */}
                            <div className="space-y-2 border-t border-slate-100 pt-3">
                              <span className="text-[10px] font-extrabold text-[#231918] uppercase tracking-wider block">
                                Agendamento (Janeiro)
                              </span>
                              <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide">
                                {doctor.days.map((day) => {
                                  const isSelected = selectedDays[doctor.id] === day.dayNum;
                                  return (
                                    <button
                                      key={day.dayNum}
                                      disabled={!day.available}
                                      onClick={() => setSelectedDays(prev => ({ ...prev, [doctor.id]: day.dayNum }))}
                                      className={`flex flex-col items-center justify-center min-w-[42px] h-14 rounded-xl border text-center transition-all ${
                                        !day.available 
                                          ? 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                                          : isSelected
                                            ? 'bg-[#601010] border-[#601010] text-white shadow-sm'
                                            : 'bg-white border-[#dcc0bd]/40 text-[#564240] hover:bg-slate-50'
                                      }`}
                                    >
                                      <span className="text-[10px] font-bold uppercase">{day.dayName}</span>
                                      <span className="text-xs font-extrabold mt-0.5">{day.dayNum}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Botão de Agendamento */}
                            <button
                              onClick={() => handleBookAppointment(doctor.name, doctor.id)}
                              className="w-full py-2.5 bg-[#601010] hover:bg-[#4d0c0c] text-white font-bold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center space-x-1.5"
                            >
                              <Calendar className="h-4 w-4" />
                              <span>Agendar Consulta</span>
                            </button>

                          </motion.div>
                        ))}
                    </div>

                  </div>

                  {/* Menu Fixo de Navegação Inferior (Mockup do Smartphone) */}
                  <div className="border-t border-[#dcc0bd]/30 bg-white py-3 px-8 flex justify-around items-center sticky bottom-0 z-20">
                    <button className="flex flex-col items-center space-y-0.5 text-[#601010]" aria-label="Início">
                      <Heart className="h-5 w-5 fill-current" />
                      <span className="text-[10px] font-bold">Início</span>
                    </button>
                    <button className="flex flex-col items-center space-y-0.5 text-[#564240] hover:text-[#231918]" aria-label="Agenda">
                      <CalendarCheck2 className="h-5 w-5" />
                      <span className="text-[10px] font-medium">Agenda</span>
                    </button>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Home Indicator Bar (Simulação de gestos do celular no Desktop) */}
          <div className="h-5 w-full bg-white flex items-center justify-center pb-2 shrink-0">
            <div className="w-36 h-1 bg-slate-300 rounded-full" />
          </div>

        </div>

      </div>

    </div>
  );
};

export default App;