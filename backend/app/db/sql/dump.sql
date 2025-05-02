--
-- PostgreSQL database dump
--

-- Dumped from database version 15.12 (Debian 15.12-1.pgdg120+1)
-- Dumped by pg_dump version 15.12 (Debian 15.12-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: posicaojogador; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.posicaojogador AS ENUM (
    'atacante',
    'meio_campo',
    'zagueiro',
    'goleiro'
);


ALTER TYPE public.posicaojogador OWNER TO postgres;

--
-- Name: tipoevento; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.tipoevento AS ENUM (
    'gol',
    'falta',
    'cartao_amarelo',
    'cartao_vermelho',
    'substituicao'
);


ALTER TYPE public.tipoevento OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: escalacoes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.escalacoes (
    id integer NOT NULL,
    titular boolean,
    minutos_em_campo integer,
    posicao_em_campo character varying,
    substituido boolean,
    entrou_durante_o_jogo boolean,
    jogador_id integer,
    partida_id integer
);


ALTER TABLE public.escalacoes OWNER TO postgres;

--
-- Name: escalacoes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.escalacoes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.escalacoes_id_seq OWNER TO postgres;

--
-- Name: escalacoes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.escalacoes_id_seq OWNED BY public.escalacoes.id;


--
-- Name: estadios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estadios (
    id integer NOT NULL,
    nome character varying NOT NULL,
    capacidade integer,
    cidade character varying,
    estado character varying,
    pais character varying
);


ALTER TABLE public.estadios OWNER TO postgres;

--
-- Name: estadios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.estadios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.estadios_id_seq OWNER TO postgres;

--
-- Name: estadios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estadios_id_seq OWNED BY public.estadios.id;


--
-- Name: estatisticas_time_partida; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estatisticas_time_partida (
    id integer NOT NULL,
    posse_bola double precision,
    finalizacoes integer,
    escanteios integer,
    faltas_cometidas integer,
    impedimentos integer,
    defesas_goleiro integer,
    chutes_no_gol integer,
    chutes_fora integer,
    passes_certos integer,
    passes_errados integer,
    partida_id integer,
    time_id integer
);


ALTER TABLE public.estatisticas_time_partida OWNER TO postgres;

--
-- Name: estatisticas_time_partida_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.estatisticas_time_partida_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.estatisticas_time_partida_id_seq OWNER TO postgres;

--
-- Name: estatisticas_time_partida_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estatisticas_time_partida_id_seq OWNED BY public.estatisticas_time_partida.id;


--
-- Name: eventos_partida; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eventos_partida (
    id integer NOT NULL,
    tipo public.tipoevento NOT NULL,
    minuto integer,
    descricao character varying,
    jogador_id integer,
    partida_id integer
);


ALTER TABLE public.eventos_partida OWNER TO postgres;

--
-- Name: eventos_partida_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.eventos_partida_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.eventos_partida_id_seq OWNER TO postgres;

--
-- Name: eventos_partida_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.eventos_partida_id_seq OWNED BY public.eventos_partida.id;


--
-- Name: historico_jogadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historico_jogadores (
    id integer NOT NULL,
    data_inicio date NOT NULL,
    data_fim date,
    jogador_id integer,
    time_id integer
);


ALTER TABLE public.historico_jogadores OWNER TO postgres;

--
-- Name: historico_jogadores_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.historico_jogadores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.historico_jogadores_id_seq OWNER TO postgres;

--
-- Name: historico_jogadores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.historico_jogadores_id_seq OWNED BY public.historico_jogadores.id;


--
-- Name: historico_tecnicos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historico_tecnicos (
    id integer NOT NULL,
    data_inicio date NOT NULL,
    data_fim date,
    tecnico_id integer,
    time_id integer
);


ALTER TABLE public.historico_tecnicos OWNER TO postgres;

--
-- Name: historico_tecnicos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.historico_tecnicos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.historico_tecnicos_id_seq OWNER TO postgres;

--
-- Name: historico_tecnicos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.historico_tecnicos_id_seq OWNED BY public.historico_tecnicos.id;


--
-- Name: jogadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jogadores (
    id integer NOT NULL,
    nome character varying NOT NULL,
    idade integer NOT NULL,
    altura double precision NOT NULL,
    posicao public.posicaojogador NOT NULL,
    num_camisa integer NOT NULL,
    convocado_selecao_principal boolean,
    convocado_selecao_juniores boolean,
    estrangeiro boolean,
    valor_mercado double precision,
    time_id integer
);


ALTER TABLE public.jogadores OWNER TO postgres;

--
-- Name: jogadores_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jogadores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.jogadores_id_seq OWNER TO postgres;

--
-- Name: jogadores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jogadores_id_seq OWNED BY public.jogadores.id;


--
-- Name: partidas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.partidas (
    id integer NOT NULL,
    temporada character varying,
    data date,
    horario character varying,
    fase character varying,
    tipo_fase character varying,
    estadio_id integer,
    arbitro character varying,
    publico integer,
    publico_max integer,
    gols_mandante integer,
    gols_visitante integer,
    gols_1_tempo_mandante integer,
    gols_1_tempo_visitante integer,
    prorrogacao boolean,
    penalti boolean,
    time_mandante_id integer,
    time_visitante_id integer,
    tecnico_mandante_id integer,
    tecnico_visitante_id integer
);


ALTER TABLE public.partidas OWNER TO postgres;

--
-- Name: partidas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.partidas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.partidas_id_seq OWNER TO postgres;

--
-- Name: partidas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.partidas_id_seq OWNED BY public.partidas.id;


--
-- Name: tecnicos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tecnicos (
    id integer NOT NULL,
    nome character varying NOT NULL,
    idade integer NOT NULL,
    data_inicio date NOT NULL,
    data_fim date,
    nacionalidade character varying,
    tempo_carreira integer
);


ALTER TABLE public.tecnicos OWNER TO postgres;

--
-- Name: tecnicos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tecnicos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tecnicos_id_seq OWNER TO postgres;

--
-- Name: tecnicos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tecnicos_id_seq OWNED BY public.tecnicos.id;


--
-- Name: times; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.times (
    id integer NOT NULL,
    nome character varying NOT NULL,
    socios integer,
    valor_equipe_titular double precision,
    valor_medio_equipe_titular double precision
);


ALTER TABLE public.times OWNER TO postgres;

--
-- Name: times_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.times_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.times_id_seq OWNER TO postgres;

--
-- Name: times_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.times_id_seq OWNED BY public.times.id;


--
-- Name: times_temporada; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.times_temporada (
    id integer NOT NULL,
    data_inicio date,
    data_final date,
    temporada character varying NOT NULL,
    time_id integer
);


ALTER TABLE public.times_temporada OWNER TO postgres;

--
-- Name: times_temporada_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.times_temporada_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.times_temporada_id_seq OWNER TO postgres;

--
-- Name: times_temporada_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.times_temporada_id_seq OWNED BY public.times_temporada.id;


--
-- Name: escalacoes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.escalacoes ALTER COLUMN id SET DEFAULT nextval('public.escalacoes_id_seq'::regclass);


--
-- Name: estadios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estadios ALTER COLUMN id SET DEFAULT nextval('public.estadios_id_seq'::regclass);


--
-- Name: estatisticas_time_partida id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estatisticas_time_partida ALTER COLUMN id SET DEFAULT nextval('public.estatisticas_time_partida_id_seq'::regclass);


--
-- Name: eventos_partida id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos_partida ALTER COLUMN id SET DEFAULT nextval('public.eventos_partida_id_seq'::regclass);


--
-- Name: historico_jogadores id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_jogadores ALTER COLUMN id SET DEFAULT nextval('public.historico_jogadores_id_seq'::regclass);


--
-- Name: historico_tecnicos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_tecnicos ALTER COLUMN id SET DEFAULT nextval('public.historico_tecnicos_id_seq'::regclass);


--
-- Name: jogadores id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jogadores ALTER COLUMN id SET DEFAULT nextval('public.jogadores_id_seq'::regclass);


--
-- Name: partidas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partidas ALTER COLUMN id SET DEFAULT nextval('public.partidas_id_seq'::regclass);


--
-- Name: tecnicos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tecnicos ALTER COLUMN id SET DEFAULT nextval('public.tecnicos_id_seq'::regclass);


--
-- Name: times id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.times ALTER COLUMN id SET DEFAULT nextval('public.times_id_seq'::regclass);


--
-- Name: times_temporada id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.times_temporada ALTER COLUMN id SET DEFAULT nextval('public.times_temporada_id_seq'::regclass);


--
-- Data for Name: escalacoes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.escalacoes (id, titular, minutos_em_campo, posicao_em_campo, substituido, entrou_durante_o_jogo, jogador_id, partida_id) FROM stdin;
1	t	64	atacante	f	f	13	1
2	t	62	goleiro	f	f	289	1
3	t	86	zagueiro	f	f	199	1
4	t	58	goleiro	t	f	64	1
5	t	61	meio_campo	t	f	118	1
6	t	85	zagueiro	t	f	20	1
7	t	88	atacante	t	f	162	1
8	t	53	atacante	f	f	174	1
9	t	88	goleiro	f	f	154	1
10	t	54	meio_campo	t	f	192	1
11	t	47	meio_campo	f	f	150	1
12	f	19	meio_campo	f	t	158	1
13	f	6	zagueiro	f	f	33	1
14	f	15	meio_campo	f	t	298	1
15	f	41	zagueiro	f	t	294	1
16	f	7	goleiro	f	t	143	1
17	t	63	meio_campo	f	f	91	2
18	t	67	goleiro	t	f	76	2
19	t	60	zagueiro	f	f	12	2
20	t	82	atacante	f	f	169	2
21	t	86	zagueiro	f	f	52	2
22	t	58	zagueiro	t	f	164	2
23	t	65	meio_campo	f	f	275	2
24	t	46	zagueiro	f	f	68	2
25	t	53	atacante	f	f	193	2
26	t	45	atacante	t	f	137	2
27	t	81	atacante	t	f	47	2
28	f	27	meio_campo	f	f	234	2
29	f	24	atacante	f	f	270	2
30	f	32	goleiro	f	f	85	2
31	f	5	goleiro	f	f	189	2
32	t	86	atacante	f	f	107	3
33	t	82	zagueiro	t	f	254	3
34	t	79	meio_campo	f	f	269	3
35	t	47	zagueiro	f	f	75	3
36	t	77	meio_campo	t	f	250	3
37	t	46	zagueiro	f	f	165	3
38	t	57	atacante	f	f	206	3
39	t	83	zagueiro	f	f	187	3
40	t	67	zagueiro	f	f	9	3
41	t	88	zagueiro	t	f	247	3
42	t	73	meio_campo	t	f	219	3
43	f	31	atacante	f	t	224	3
44	f	25	goleiro	f	f	192	3
45	f	21	zagueiro	f	f	43	3
46	f	32	atacante	f	f	113	3
47	f	20	goleiro	f	f	30	3
48	t	85	atacante	t	f	59	4
49	t	74	atacante	t	f	83	4
50	t	87	zagueiro	f	f	197	4
51	t	50	zagueiro	f	f	245	4
52	t	80	atacante	f	f	89	4
53	t	80	goleiro	t	f	290	4
54	t	60	atacante	t	f	84	4
55	t	51	zagueiro	f	f	278	4
56	t	90	meio_campo	f	f	100	4
57	t	63	goleiro	t	f	142	4
58	t	69	atacante	t	f	52	4
59	f	40	atacante	f	t	103	4
60	f	25	meio_campo	f	f	106	4
61	f	23	meio_campo	f	t	76	4
62	f	37	meio_campo	f	t	62	4
63	f	45	zagueiro	f	f	151	4
64	t	82	atacante	t	f	35	5
65	t	87	atacante	f	f	134	5
66	t	70	goleiro	f	f	300	5
67	t	54	goleiro	f	f	29	5
68	t	74	goleiro	f	f	8	5
69	t	46	atacante	f	f	289	5
70	t	50	zagueiro	t	f	96	5
71	t	85	meio_campo	f	f	66	5
72	t	77	goleiro	f	f	271	5
73	t	76	goleiro	f	f	24	5
74	t	58	goleiro	f	f	46	5
75	f	8	atacante	f	t	32	5
76	f	25	meio_campo	f	t	170	5
77	f	29	goleiro	f	f	176	5
78	f	45	goleiro	f	f	135	5
79	t	63	zagueiro	t	f	270	6
80	t	63	goleiro	f	f	134	6
81	t	88	atacante	f	f	148	6
82	t	63	zagueiro	t	f	103	6
83	t	45	zagueiro	f	f	19	6
84	t	68	goleiro	f	f	220	6
85	t	74	atacante	f	f	263	6
86	t	89	zagueiro	f	f	193	6
87	t	60	goleiro	t	f	90	6
88	t	90	atacante	f	f	177	6
89	t	64	goleiro	t	f	209	6
90	f	16	goleiro	f	f	261	6
91	f	27	atacante	f	f	18	6
92	f	7	zagueiro	f	f	21	6
93	t	52	zagueiro	t	f	276	7
94	t	68	zagueiro	f	f	140	7
95	t	48	atacante	t	f	226	7
96	t	61	zagueiro	f	f	156	7
97	t	63	meio_campo	f	f	160	7
98	t	59	goleiro	f	f	221	7
99	t	51	atacante	f	f	228	7
100	t	79	meio_campo	t	f	211	7
101	t	84	zagueiro	f	f	279	7
102	t	52	meio_campo	t	f	96	7
103	t	69	meio_campo	t	f	151	7
104	t	70	atacante	f	f	229	8
105	t	75	goleiro	t	f	77	8
106	t	59	goleiro	f	f	60	8
107	t	47	atacante	t	f	134	8
108	t	47	meio_campo	f	f	267	8
109	t	45	goleiro	t	f	209	8
110	t	77	goleiro	f	f	10	8
111	t	60	goleiro	f	f	26	8
112	t	58	goleiro	f	f	158	8
113	t	47	goleiro	f	f	196	8
114	t	82	goleiro	f	f	89	8
115	f	41	meio_campo	f	t	286	8
116	t	57	atacante	f	f	192	9
117	t	58	zagueiro	t	f	138	9
118	t	71	meio_campo	f	f	101	9
119	t	63	zagueiro	f	f	221	9
120	t	83	atacante	f	f	11	9
121	t	83	goleiro	f	f	108	9
122	t	72	meio_campo	t	f	265	9
123	t	81	meio_campo	f	f	96	9
124	t	63	atacante	t	f	90	9
125	t	60	zagueiro	t	f	252	9
126	t	61	meio_campo	t	f	255	9
127	f	8	zagueiro	f	t	100	9
128	f	27	zagueiro	f	t	292	9
129	f	38	goleiro	f	f	103	9
130	t	46	meio_campo	f	f	83	10
131	t	70	atacante	f	f	123	10
132	t	50	atacante	f	f	263	10
133	t	50	atacante	f	f	28	10
134	t	48	zagueiro	f	f	97	10
135	t	49	atacante	f	f	257	10
136	t	61	zagueiro	f	f	215	10
137	t	51	goleiro	f	f	82	10
138	t	79	goleiro	f	f	114	10
139	t	67	atacante	f	f	174	10
140	t	76	meio_campo	t	f	262	10
141	f	8	goleiro	f	t	283	10
142	f	19	atacante	f	f	169	10
143	f	19	atacante	f	t	264	10
144	f	27	meio_campo	f	t	96	10
145	t	68	atacante	f	f	23	11
146	t	73	atacante	t	f	6	11
147	t	63	atacante	t	f	246	11
148	t	90	zagueiro	f	f	19	11
149	t	63	zagueiro	t	f	170	11
150	t	83	meio_campo	t	f	202	11
151	t	49	meio_campo	f	f	7	11
152	t	51	meio_campo	f	f	226	11
153	t	53	atacante	f	f	148	11
154	t	57	zagueiro	t	f	260	11
155	t	64	goleiro	t	f	152	11
156	f	45	goleiro	f	t	267	11
157	t	73	goleiro	t	f	32	12
158	t	56	zagueiro	f	f	166	12
159	t	76	atacante	f	f	188	12
160	t	57	meio_campo	f	f	63	12
161	t	85	goleiro	f	f	114	12
162	t	84	meio_campo	t	f	36	12
163	t	60	atacante	t	f	149	12
164	t	75	meio_campo	t	f	84	12
165	t	85	zagueiro	f	f	105	12
166	t	63	zagueiro	f	f	119	12
167	t	72	atacante	f	f	251	12
168	f	17	meio_campo	f	t	275	12
169	t	52	atacante	f	f	129	13
170	t	70	meio_campo	f	f	198	13
171	t	69	meio_campo	f	f	28	13
172	t	88	zagueiro	t	f	259	13
173	t	77	zagueiro	f	f	280	13
174	t	76	goleiro	f	f	89	13
175	t	48	atacante	f	f	142	13
176	t	73	atacante	t	f	124	13
177	t	77	goleiro	f	f	90	13
178	t	70	atacante	f	f	49	13
179	t	55	atacante	f	f	113	13
180	f	20	zagueiro	f	t	255	13
181	f	13	meio_campo	f	t	300	13
182	t	60	goleiro	f	f	261	14
183	t	82	meio_campo	f	f	255	14
184	t	51	meio_campo	f	f	8	14
185	t	79	meio_campo	f	f	276	14
186	t	88	meio_campo	t	f	21	14
187	t	72	zagueiro	f	f	122	14
188	t	73	atacante	t	f	128	14
189	t	54	goleiro	t	f	296	14
190	t	72	meio_campo	f	f	263	14
191	t	74	zagueiro	f	f	88	14
192	t	81	goleiro	f	f	222	14
193	f	34	meio_campo	f	t	5	14
194	f	22	goleiro	f	t	66	14
195	f	37	goleiro	f	f	268	14
196	f	18	goleiro	f	f	201	14
197	f	37	zagueiro	f	t	159	14
198	t	50	meio_campo	t	f	257	15
199	t	81	goleiro	t	f	284	15
200	t	90	meio_campo	t	f	241	15
201	t	83	meio_campo	f	f	200	15
202	t	65	meio_campo	f	f	164	15
203	t	71	goleiro	f	f	188	15
204	t	58	atacante	t	f	88	15
205	t	58	atacante	f	f	154	15
206	t	50	zagueiro	t	f	262	15
207	t	48	zagueiro	f	f	223	15
208	t	61	atacante	f	f	147	15
209	f	5	atacante	f	t	44	15
210	f	16	zagueiro	f	f	277	15
211	f	45	goleiro	f	t	222	15
212	f	9	goleiro	f	f	122	15
213	f	32	zagueiro	f	f	75	15
214	t	81	zagueiro	f	f	7	16
215	t	47	goleiro	f	f	230	16
216	t	65	atacante	f	f	291	16
217	t	90	atacante	t	f	185	16
218	t	56	zagueiro	t	f	276	16
219	t	52	atacante	t	f	161	16
220	t	63	zagueiro	f	f	163	16
221	t	55	goleiro	t	f	275	16
222	t	63	meio_campo	t	f	127	16
223	t	69	atacante	t	f	234	16
224	t	63	meio_campo	t	f	28	16
225	f	40	meio_campo	f	f	233	16
226	f	22	meio_campo	f	t	200	16
227	f	28	zagueiro	f	t	237	16
228	f	26	zagueiro	f	t	184	16
229	t	79	meio_campo	t	f	210	17
230	t	81	zagueiro	f	f	187	17
231	t	57	meio_campo	f	f	14	17
232	t	64	atacante	t	f	32	17
233	t	55	meio_campo	f	f	227	17
234	t	45	meio_campo	t	f	246	17
235	t	61	zagueiro	f	f	150	17
236	t	86	goleiro	t	f	11	17
237	t	63	atacante	f	f	2	17
238	t	55	atacante	t	f	289	17
239	t	72	meio_campo	f	f	199	17
240	f	10	zagueiro	f	t	96	17
241	t	59	goleiro	f	f	267	18
242	t	63	meio_campo	t	f	201	18
243	t	81	zagueiro	f	f	37	18
244	t	72	goleiro	f	f	241	18
245	t	45	goleiro	t	f	146	18
246	t	68	zagueiro	f	f	223	18
247	t	48	atacante	t	f	138	18
248	t	78	atacante	f	f	38	18
249	t	69	goleiro	f	f	156	18
250	t	45	goleiro	f	f	73	18
251	t	82	atacante	t	f	291	18
252	f	23	meio_campo	f	t	205	18
253	f	29	goleiro	f	t	221	18
254	f	29	zagueiro	f	f	253	18
255	f	10	atacante	f	f	1	18
256	f	8	zagueiro	f	f	53	18
257	t	62	zagueiro	f	f	169	19
258	t	69	meio_campo	t	f	62	19
259	t	55	zagueiro	f	f	290	19
260	t	74	atacante	f	f	35	19
261	t	49	meio_campo	f	f	111	19
262	t	80	atacante	t	f	297	19
263	t	77	goleiro	f	f	196	19
264	t	81	atacante	t	f	174	19
265	t	50	atacante	f	f	247	19
266	t	60	zagueiro	t	f	152	19
267	t	70	meio_campo	t	f	154	19
268	f	11	meio_campo	f	f	89	19
269	f	43	atacante	f	f	262	19
270	f	28	zagueiro	f	t	37	19
271	f	13	meio_campo	f	t	57	19
272	f	7	goleiro	f	f	127	19
273	t	46	meio_campo	f	f	30	20
274	t	60	atacante	t	f	83	20
275	t	68	meio_campo	f	f	46	20
276	t	87	meio_campo	f	f	171	20
277	t	82	atacante	t	f	196	20
278	t	70	goleiro	t	f	199	20
279	t	61	atacante	t	f	258	20
280	t	58	goleiro	f	f	11	20
281	t	58	goleiro	t	f	246	20
282	t	63	meio_campo	t	f	227	20
283	t	45	goleiro	t	f	67	20
284	f	25	atacante	f	t	33	20
285	f	21	meio_campo	f	t	225	20
286	f	26	zagueiro	f	t	149	20
287	f	7	atacante	f	f	269	20
288	t	50	meio_campo	t	f	182	21
289	t	66	zagueiro	t	f	101	21
290	t	75	zagueiro	f	f	140	21
291	t	45	goleiro	f	f	90	21
292	t	61	zagueiro	t	f	88	21
293	t	70	atacante	f	f	14	21
294	t	78	atacante	t	f	258	21
295	t	70	atacante	f	f	198	21
296	t	70	meio_campo	f	f	15	21
297	t	55	goleiro	t	f	251	21
298	t	71	zagueiro	f	f	161	21
299	f	22	meio_campo	f	t	136	21
300	f	7	goleiro	f	t	115	21
301	f	28	atacante	f	t	128	21
302	f	32	zagueiro	f	f	269	21
303	f	40	zagueiro	f	t	120	21
304	t	65	goleiro	f	f	86	22
305	t	56	goleiro	t	f	8	22
306	t	57	zagueiro	f	f	192	22
307	t	89	atacante	t	f	297	22
308	t	55	atacante	f	f	220	22
309	t	68	zagueiro	t	f	201	22
310	t	53	goleiro	t	f	67	22
311	t	87	meio_campo	f	f	30	22
312	t	86	zagueiro	f	f	245	22
313	t	54	meio_campo	t	f	49	22
314	t	60	goleiro	f	f	240	22
315	f	11	zagueiro	f	f	282	22
316	f	34	zagueiro	f	f	63	22
317	t	84	atacante	f	f	12	23
318	t	57	atacante	f	f	110	23
319	t	62	meio_campo	t	f	114	23
320	t	76	zagueiro	f	f	58	23
321	t	83	meio_campo	t	f	189	23
322	t	74	atacante	f	f	259	23
323	t	74	meio_campo	t	f	271	23
324	t	51	zagueiro	f	f	53	23
325	t	80	goleiro	t	f	21	23
326	t	77	goleiro	f	f	76	23
327	t	61	zagueiro	t	f	286	23
328	f	5	zagueiro	f	t	178	23
329	f	27	meio_campo	f	t	277	23
330	f	38	zagueiro	f	f	60	23
331	t	80	atacante	f	f	189	24
332	t	56	goleiro	t	f	132	24
333	t	81	goleiro	t	f	83	24
334	t	65	meio_campo	f	f	172	24
335	t	69	atacante	f	f	135	24
336	t	65	zagueiro	t	f	80	24
337	t	71	goleiro	t	f	205	24
338	t	76	atacante	t	f	139	24
339	t	81	zagueiro	t	f	88	24
340	t	63	atacante	t	f	63	24
341	t	53	meio_campo	t	f	267	24
342	f	24	atacante	f	f	272	24
343	f	14	atacante	f	f	211	24
344	f	19	atacante	f	f	258	24
345	t	77	goleiro	f	f	126	25
346	t	71	goleiro	t	f	80	25
347	t	88	atacante	f	f	169	25
348	t	75	zagueiro	f	f	49	25
349	t	71	atacante	t	f	104	25
350	t	82	atacante	f	f	260	25
351	t	47	goleiro	t	f	47	25
352	t	55	atacante	f	f	160	25
353	t	82	meio_campo	f	f	299	25
354	t	89	meio_campo	t	f	234	25
355	t	58	meio_campo	f	f	155	25
356	f	28	atacante	f	t	46	25
357	f	22	meio_campo	f	f	166	25
358	f	42	zagueiro	f	t	186	25
359	f	17	zagueiro	f	f	9	25
360	t	77	zagueiro	f	f	277	26
361	t	46	meio_campo	t	f	166	26
362	t	45	meio_campo	f	f	131	26
363	t	71	goleiro	f	f	165	26
364	t	74	zagueiro	f	f	94	26
365	t	65	meio_campo	t	f	162	26
366	t	53	meio_campo	t	f	242	26
367	t	70	goleiro	f	f	219	26
368	t	67	atacante	t	f	39	26
369	t	53	goleiro	f	f	246	26
370	t	72	atacante	t	f	151	26
371	f	41	meio_campo	f	f	164	26
372	f	16	zagueiro	f	t	196	26
373	t	47	goleiro	t	f	85	27
374	t	62	atacante	f	f	98	27
375	t	61	meio_campo	t	f	165	27
376	t	70	atacante	t	f	83	27
377	t	79	atacante	f	f	28	27
378	t	78	zagueiro	f	f	180	27
379	t	87	goleiro	t	f	256	27
380	t	51	goleiro	f	f	38	27
381	t	61	atacante	f	f	50	27
382	t	75	meio_campo	t	f	37	27
383	t	58	atacante	t	f	189	27
384	t	45	goleiro	f	f	164	28
385	t	67	goleiro	f	f	213	28
386	t	84	zagueiro	f	f	215	28
387	t	47	zagueiro	f	f	240	28
388	t	67	meio_campo	f	f	161	28
389	t	87	meio_campo	t	f	159	28
390	t	82	atacante	t	f	68	28
391	t	58	goleiro	t	f	272	28
392	t	90	zagueiro	f	f	82	28
393	t	60	zagueiro	f	f	129	28
394	t	88	goleiro	f	f	113	28
395	f	35	meio_campo	f	f	140	28
396	f	5	goleiro	f	f	216	28
397	f	33	goleiro	f	t	16	28
398	f	10	atacante	f	f	268	28
399	t	87	atacante	f	f	137	29
400	t	81	zagueiro	t	f	146	29
401	t	84	goleiro	f	f	292	29
402	t	71	meio_campo	f	f	170	29
403	t	75	goleiro	f	f	197	29
404	t	54	atacante	t	f	138	29
405	t	54	atacante	t	f	121	29
406	t	69	zagueiro	t	f	89	29
407	t	45	goleiro	f	f	84	29
408	t	86	goleiro	t	f	159	29
409	t	83	zagueiro	f	f	10	29
410	t	46	goleiro	t	f	177	30
411	t	84	atacante	t	f	140	30
412	t	72	atacante	t	f	238	30
413	t	85	goleiro	t	f	184	30
414	t	84	meio_campo	f	f	175	30
415	t	66	atacante	f	f	236	30
416	t	46	meio_campo	t	f	77	30
417	t	90	zagueiro	f	f	287	30
418	t	60	zagueiro	f	f	206	30
419	t	57	meio_campo	f	f	141	30
420	t	69	zagueiro	t	f	280	30
421	f	35	meio_campo	f	f	75	30
422	f	25	zagueiro	f	f	181	30
423	t	67	atacante	t	f	276	31
424	t	85	zagueiro	f	f	67	31
425	t	66	meio_campo	t	f	99	31
426	t	52	goleiro	f	f	182	31
427	t	65	zagueiro	t	f	234	31
428	t	46	atacante	f	f	126	31
429	t	85	meio_campo	t	f	210	31
430	t	73	meio_campo	f	f	205	31
431	t	68	meio_campo	f	f	138	31
432	t	76	zagueiro	t	f	253	31
433	t	72	goleiro	t	f	114	31
434	f	31	atacante	f	t	146	31
435	t	88	zagueiro	f	f	258	32
436	t	76	meio_campo	f	f	113	32
437	t	63	zagueiro	f	f	122	32
438	t	61	meio_campo	t	f	42	32
439	t	70	goleiro	f	f	166	32
440	t	85	atacante	f	f	195	32
441	t	90	zagueiro	f	f	257	32
442	t	60	goleiro	f	f	38	32
443	t	53	meio_campo	f	f	270	32
444	t	83	goleiro	f	f	204	32
445	t	59	atacante	t	f	155	32
446	f	13	goleiro	f	f	130	32
447	f	34	meio_campo	f	f	294	32
448	f	8	meio_campo	f	f	121	32
449	f	14	atacante	f	t	11	32
450	f	28	meio_campo	f	t	196	32
451	t	74	atacante	f	f	27	33
452	t	57	meio_campo	f	f	217	33
453	t	68	goleiro	t	f	202	33
454	t	55	zagueiro	f	f	16	33
455	t	89	zagueiro	t	f	86	33
456	t	88	goleiro	f	f	279	33
457	t	54	atacante	t	f	61	33
458	t	84	goleiro	t	f	196	33
459	t	45	meio_campo	t	f	183	33
460	t	71	zagueiro	f	f	246	33
461	t	80	meio_campo	f	f	261	33
462	f	12	atacante	f	f	131	33
463	f	24	atacante	f	f	243	33
464	f	10	meio_campo	f	t	172	33
465	t	56	meio_campo	t	f	181	34
466	t	84	meio_campo	t	f	8	34
467	t	63	atacante	f	f	133	34
468	t	73	atacante	t	f	204	34
469	t	46	atacante	t	f	259	34
470	t	90	goleiro	f	f	255	34
471	t	79	atacante	f	f	68	34
472	t	76	goleiro	t	f	300	34
473	t	62	goleiro	t	f	53	34
474	t	69	goleiro	f	f	174	34
475	t	62	zagueiro	f	f	254	34
476	f	23	goleiro	f	t	273	34
477	t	86	meio_campo	t	f	291	35
478	t	53	goleiro	f	f	65	35
479	t	82	goleiro	f	f	223	35
480	t	65	meio_campo	f	f	299	35
481	t	49	zagueiro	t	f	220	35
482	t	67	zagueiro	f	f	152	35
483	t	47	atacante	t	f	165	35
484	t	54	goleiro	f	f	204	35
485	t	45	zagueiro	t	f	49	35
486	t	90	zagueiro	f	f	127	35
487	t	67	zagueiro	f	f	159	35
488	f	39	goleiro	f	t	62	35
489	f	42	atacante	f	f	111	35
490	f	23	meio_campo	f	f	185	35
491	f	26	goleiro	f	f	201	35
492	f	15	atacante	f	f	101	35
493	t	74	meio_campo	f	f	65	36
494	t	73	zagueiro	f	f	37	36
495	t	82	zagueiro	t	f	8	36
496	t	64	atacante	f	f	178	36
497	t	46	atacante	f	f	91	36
498	t	59	meio_campo	f	f	247	36
499	t	87	meio_campo	f	f	32	36
500	t	84	atacante	f	f	159	36
501	t	49	goleiro	t	f	201	36
502	t	63	meio_campo	f	f	204	36
503	t	50	zagueiro	t	f	241	36
504	f	9	goleiro	f	t	28	36
505	f	30	zagueiro	f	f	214	36
506	f	23	atacante	f	f	249	36
507	t	85	zagueiro	t	f	38	37
508	t	62	zagueiro	t	f	123	37
509	t	52	zagueiro	t	f	24	37
510	t	65	zagueiro	f	f	147	37
511	t	48	zagueiro	f	f	163	37
512	t	60	goleiro	t	f	13	37
513	t	64	meio_campo	f	f	15	37
514	t	88	meio_campo	t	f	66	37
515	t	49	meio_campo	f	f	63	37
516	t	58	meio_campo	t	f	204	37
517	t	66	goleiro	t	f	182	37
518	f	22	goleiro	f	t	32	37
519	t	63	atacante	f	f	285	38
520	t	66	goleiro	t	f	38	38
521	t	87	zagueiro	t	f	112	38
522	t	69	zagueiro	f	f	125	38
523	t	90	atacante	f	f	114	38
524	t	57	atacante	t	f	218	38
525	t	65	zagueiro	f	f	264	38
526	t	58	atacante	f	f	86	38
527	t	46	zagueiro	f	f	223	38
528	t	88	meio_campo	f	f	246	38
529	t	79	zagueiro	f	f	131	38
530	f	43	atacante	f	f	143	38
531	f	29	goleiro	f	t	74	38
532	t	59	zagueiro	t	f	248	39
533	t	57	atacante	t	f	35	39
534	t	79	atacante	t	f	172	39
535	t	86	goleiro	t	f	122	39
536	t	73	goleiro	t	f	255	39
537	t	79	atacante	f	f	243	39
538	t	73	zagueiro	f	f	94	39
539	t	72	meio_campo	t	f	117	39
540	t	66	atacante	f	f	89	39
541	t	60	meio_campo	t	f	56	39
542	t	82	meio_campo	f	f	91	39
543	f	28	meio_campo	f	t	98	39
544	f	33	goleiro	f	t	123	39
545	f	31	meio_campo	f	f	32	39
546	f	32	meio_campo	f	t	208	39
547	t	56	meio_campo	f	f	116	40
548	t	55	zagueiro	t	f	248	40
549	t	78	atacante	f	f	296	40
550	t	88	goleiro	f	f	12	40
551	t	58	goleiro	f	f	117	40
552	t	89	meio_campo	t	f	208	40
553	t	49	meio_campo	f	f	23	40
554	t	67	zagueiro	f	f	280	40
555	t	47	atacante	f	f	241	40
556	t	60	goleiro	t	f	37	40
557	t	48	meio_campo	t	f	42	40
558	t	84	atacante	f	f	269	41
559	t	53	atacante	f	f	224	41
560	t	82	meio_campo	f	f	30	41
561	t	79	goleiro	f	f	251	41
562	t	79	atacante	f	f	248	41
563	t	54	zagueiro	f	f	101	41
564	t	59	goleiro	t	f	273	41
565	t	63	goleiro	t	f	56	41
566	t	72	zagueiro	t	f	253	41
567	t	54	atacante	t	f	200	41
568	t	83	atacante	f	f	243	41
569	t	85	atacante	f	f	22	42
570	t	75	meio_campo	f	f	210	42
571	t	90	goleiro	t	f	271	42
572	t	71	meio_campo	f	f	4	42
573	t	85	goleiro	t	f	71	42
574	t	45	atacante	t	f	201	42
575	t	55	goleiro	t	f	5	42
576	t	87	zagueiro	t	f	106	42
577	t	45	goleiro	t	f	295	42
578	t	77	atacante	f	f	184	42
579	t	47	goleiro	f	f	112	42
580	f	36	atacante	f	t	289	42
581	t	50	atacante	t	f	287	43
582	t	49	goleiro	t	f	292	43
583	t	83	zagueiro	t	f	90	43
584	t	78	zagueiro	f	f	101	43
585	t	67	meio_campo	t	f	115	43
586	t	88	zagueiro	t	f	43	43
587	t	76	atacante	t	f	206	43
588	t	78	goleiro	t	f	97	43
589	t	58	goleiro	t	f	83	43
590	t	90	meio_campo	f	f	179	43
591	t	65	goleiro	t	f	224	43
592	t	72	meio_campo	f	f	195	44
593	t	54	zagueiro	f	f	280	44
594	t	45	meio_campo	f	f	250	44
595	t	76	goleiro	t	f	36	44
596	t	89	goleiro	t	f	126	44
597	t	74	zagueiro	f	f	172	44
598	t	69	zagueiro	f	f	50	44
599	t	84	zagueiro	f	f	214	44
600	t	87	zagueiro	t	f	287	44
601	t	54	zagueiro	f	f	44	44
602	t	74	zagueiro	t	f	216	44
603	t	86	goleiro	t	f	227	45
604	t	79	atacante	f	f	200	45
605	t	67	meio_campo	t	f	108	45
606	t	70	meio_campo	t	f	2	45
607	t	73	atacante	t	f	281	45
608	t	55	meio_campo	f	f	254	45
609	t	47	meio_campo	t	f	85	45
610	t	49	meio_campo	t	f	233	45
611	t	88	goleiro	f	f	40	45
612	t	88	atacante	t	f	146	45
613	t	61	goleiro	f	f	3	45
614	f	5	goleiro	f	t	171	45
615	f	6	zagueiro	f	t	148	45
616	f	35	atacante	f	t	149	45
617	t	55	goleiro	f	f	243	46
618	t	89	atacante	f	f	161	46
619	t	72	zagueiro	t	f	111	46
620	t	52	goleiro	t	f	235	46
621	t	65	zagueiro	f	f	143	46
622	t	60	goleiro	f	f	38	46
623	t	78	meio_campo	f	f	102	46
624	t	63	atacante	f	f	26	46
625	t	77	atacante	t	f	91	46
626	t	47	zagueiro	t	f	50	46
627	t	68	goleiro	f	f	191	46
628	f	23	goleiro	f	f	214	46
629	f	12	atacante	f	f	212	46
630	t	90	goleiro	f	f	114	47
631	t	46	zagueiro	f	f	268	47
632	t	72	atacante	t	f	255	47
633	t	58	atacante	t	f	166	47
634	t	77	zagueiro	t	f	271	47
635	t	83	goleiro	f	f	270	47
636	t	48	atacante	t	f	67	47
637	t	77	goleiro	f	f	251	47
638	t	90	atacante	f	f	96	47
639	t	74	atacante	f	f	78	47
640	t	82	zagueiro	f	f	178	47
641	f	31	meio_campo	f	t	265	47
642	t	45	atacante	f	f	266	48
643	t	72	meio_campo	f	f	256	48
644	t	76	meio_campo	t	f	162	48
645	t	59	meio_campo	f	f	29	48
646	t	60	atacante	t	f	198	48
647	t	61	atacante	t	f	133	48
648	t	45	zagueiro	f	f	65	48
649	t	55	meio_campo	f	f	277	48
650	t	89	zagueiro	t	f	146	48
651	t	79	goleiro	f	f	188	48
652	t	87	meio_campo	f	f	20	48
653	f	32	atacante	f	f	201	48
654	f	41	meio_campo	f	f	230	48
655	f	32	zagueiro	f	f	75	48
656	f	38	zagueiro	f	t	282	48
657	f	20	zagueiro	f	f	191	48
658	t	68	meio_campo	t	f	131	49
659	t	62	meio_campo	f	f	144	49
660	t	73	atacante	f	f	12	49
661	t	66	atacante	f	f	199	49
662	t	81	zagueiro	t	f	70	49
663	t	73	meio_campo	t	f	104	49
664	t	79	goleiro	f	f	177	49
665	t	90	atacante	t	f	13	49
666	t	70	zagueiro	t	f	5	49
667	t	64	zagueiro	f	f	98	49
668	t	75	meio_campo	f	f	251	49
669	f	26	meio_campo	f	t	78	49
670	t	78	meio_campo	f	f	81	50
671	t	68	goleiro	f	f	6	50
672	t	57	meio_campo	t	f	54	50
673	t	65	atacante	t	f	292	50
674	t	88	goleiro	t	f	160	50
675	t	54	zagueiro	t	f	173	50
676	t	72	meio_campo	f	f	126	50
677	t	89	meio_campo	t	f	36	50
678	t	60	zagueiro	f	f	282	50
679	t	78	meio_campo	t	f	170	50
680	t	59	meio_campo	t	f	80	50
681	f	45	zagueiro	f	f	105	50
682	f	10	meio_campo	f	t	261	50
683	f	22	atacante	f	f	181	50
684	f	36	meio_campo	f	t	182	50
685	t	62	meio_campo	f	f	289	51
686	t	53	meio_campo	f	f	108	51
687	t	56	zagueiro	t	f	113	51
688	t	71	goleiro	f	f	261	51
689	t	55	zagueiro	t	f	188	51
690	t	51	meio_campo	t	f	112	51
691	t	80	atacante	t	f	281	51
692	t	68	goleiro	f	f	252	51
693	t	69	zagueiro	f	f	294	51
694	t	57	meio_campo	f	f	80	51
695	t	77	zagueiro	f	f	69	51
696	f	39	meio_campo	f	t	44	51
697	f	27	meio_campo	f	f	219	51
698	f	42	zagueiro	f	t	268	51
699	t	57	atacante	t	f	151	52
700	t	85	goleiro	f	f	300	52
701	t	73	goleiro	f	f	6	52
702	t	66	zagueiro	f	f	296	52
703	t	59	atacante	f	f	92	52
704	t	66	meio_campo	t	f	98	52
705	t	80	meio_campo	t	f	298	52
706	t	52	atacante	t	f	230	52
707	t	56	atacante	f	f	71	52
708	t	46	zagueiro	f	f	164	52
709	t	68	goleiro	f	f	153	52
710	f	11	zagueiro	f	f	216	52
711	f	5	zagueiro	f	f	96	52
712	f	20	zagueiro	f	f	251	52
713	t	58	goleiro	t	f	24	53
714	t	88	zagueiro	f	f	94	53
715	t	89	meio_campo	t	f	15	53
716	t	45	atacante	f	f	131	53
717	t	54	goleiro	f	f	45	53
718	t	58	goleiro	t	f	113	53
719	t	77	meio_campo	f	f	260	53
720	t	79	zagueiro	f	f	119	53
721	t	71	goleiro	t	f	100	53
722	t	61	meio_campo	f	f	87	53
723	t	73	goleiro	t	f	26	53
724	f	35	goleiro	f	t	49	53
725	f	45	zagueiro	f	f	223	53
726	f	43	zagueiro	f	t	206	53
727	f	21	atacante	f	t	295	53
728	t	87	atacante	f	f	207	54
729	t	60	meio_campo	f	f	112	54
730	t	55	meio_campo	t	f	33	54
731	t	55	meio_campo	t	f	236	54
732	t	64	atacante	f	f	273	54
733	t	45	atacante	f	f	114	54
734	t	76	zagueiro	t	f	231	54
735	t	70	meio_campo	t	f	61	54
736	t	56	atacante	f	f	266	54
737	t	66	meio_campo	t	f	128	54
738	t	74	goleiro	t	f	282	54
739	f	22	meio_campo	f	t	240	54
740	f	40	goleiro	f	t	214	54
741	f	32	atacante	f	f	147	54
742	t	68	goleiro	t	f	246	55
743	t	80	goleiro	f	f	135	55
744	t	53	atacante	t	f	199	55
745	t	67	zagueiro	f	f	284	55
746	t	83	goleiro	f	f	258	55
747	t	62	atacante	f	f	296	55
748	t	85	zagueiro	t	f	11	55
749	t	68	zagueiro	f	f	196	55
750	t	86	meio_campo	t	f	212	55
751	t	54	goleiro	t	f	155	55
752	t	68	zagueiro	t	f	24	55
753	f	22	goleiro	f	f	185	55
754	t	51	goleiro	t	f	84	56
755	t	49	goleiro	t	f	297	56
756	t	49	goleiro	t	f	56	56
757	t	58	zagueiro	f	f	87	56
758	t	84	atacante	t	f	189	56
759	t	73	atacante	f	f	158	56
760	t	46	goleiro	f	f	146	56
761	t	74	atacante	t	f	27	56
762	t	61	zagueiro	f	f	222	56
763	t	60	zagueiro	t	f	66	56
764	t	79	goleiro	f	f	30	56
765	t	82	zagueiro	f	f	1	57
766	t	83	zagueiro	t	f	219	57
767	t	53	atacante	t	f	188	57
768	t	51	meio_campo	f	f	292	57
769	t	60	zagueiro	f	f	128	57
770	t	56	meio_campo	t	f	96	57
771	t	84	zagueiro	t	f	214	57
772	t	55	goleiro	f	f	233	57
773	t	61	meio_campo	f	f	225	57
774	t	78	meio_campo	t	f	181	57
775	t	68	meio_campo	t	f	152	57
776	f	25	zagueiro	f	t	182	57
777	f	5	zagueiro	f	f	89	57
778	f	29	zagueiro	f	t	215	57
779	t	61	goleiro	f	f	279	58
780	t	89	atacante	t	f	166	58
781	t	68	goleiro	t	f	86	58
782	t	78	goleiro	t	f	24	58
783	t	57	zagueiro	f	f	186	58
784	t	73	goleiro	t	f	239	58
785	t	52	atacante	f	f	292	58
786	t	66	goleiro	f	f	35	58
787	t	66	atacante	t	f	289	58
788	t	52	zagueiro	f	f	102	58
789	t	72	atacante	f	f	206	58
790	f	41	meio_campo	f	t	2	58
791	f	35	zagueiro	f	f	193	58
792	f	7	zagueiro	f	t	112	58
793	t	51	zagueiro	f	f	174	59
794	t	71	meio_campo	f	f	297	59
795	t	75	goleiro	f	f	25	59
796	t	90	meio_campo	f	f	224	59
797	t	50	goleiro	t	f	141	59
798	t	76	zagueiro	f	f	282	59
799	t	75	atacante	t	f	94	59
800	t	47	atacante	t	f	84	59
801	t	74	meio_campo	f	f	71	59
802	t	84	zagueiro	f	f	286	59
803	t	57	goleiro	t	f	88	59
804	f	10	goleiro	f	t	210	59
805	t	79	meio_campo	f	f	249	60
806	t	79	meio_campo	t	f	253	60
807	t	82	meio_campo	f	f	184	60
808	t	78	meio_campo	t	f	118	60
809	t	67	zagueiro	f	f	201	60
810	t	72	zagueiro	t	f	104	60
811	t	46	zagueiro	t	f	271	60
812	t	60	meio_campo	t	f	71	60
813	t	74	zagueiro	f	f	133	60
814	t	80	goleiro	f	f	126	60
815	t	50	meio_campo	f	f	264	60
816	f	18	meio_campo	f	t	166	60
817	f	32	meio_campo	f	f	190	60
818	t	50	zagueiro	f	f	19	61
819	t	86	atacante	f	f	50	61
820	t	67	zagueiro	f	f	235	61
821	t	62	atacante	f	f	214	61
822	t	54	goleiro	t	f	171	61
823	t	64	goleiro	f	f	270	61
824	t	65	zagueiro	f	f	197	61
825	t	54	goleiro	t	f	222	61
826	t	89	goleiro	f	f	103	61
827	t	56	atacante	t	f	80	61
828	t	80	atacante	t	f	6	61
829	f	37	goleiro	f	f	151	61
830	f	20	goleiro	f	f	71	61
831	t	57	zagueiro	t	f	103	62
832	t	54	meio_campo	t	f	8	62
833	t	75	zagueiro	f	f	281	62
834	t	61	atacante	f	f	174	62
835	t	90	goleiro	t	f	154	62
836	t	82	goleiro	t	f	50	62
837	t	63	atacante	f	f	192	62
838	t	66	meio_campo	t	f	131	62
839	t	68	zagueiro	f	f	56	62
840	t	62	atacante	t	f	118	62
841	t	88	goleiro	t	f	106	62
842	t	84	zagueiro	t	f	82	63
843	t	80	atacante	f	f	25	63
844	t	78	zagueiro	t	f	116	63
845	t	47	meio_campo	t	f	122	63
846	t	81	goleiro	t	f	5	63
847	t	50	atacante	f	f	285	63
848	t	84	atacante	f	f	201	63
849	t	83	atacante	t	f	225	63
850	t	86	zagueiro	f	f	160	63
851	t	49	goleiro	t	f	186	63
852	t	65	goleiro	t	f	279	63
853	f	13	meio_campo	f	f	65	63
854	f	37	meio_campo	f	f	259	63
855	t	52	zagueiro	f	f	213	64
856	t	80	goleiro	t	f	221	64
857	t	51	atacante	f	f	13	64
858	t	45	goleiro	f	f	151	64
859	t	55	atacante	t	f	181	64
860	t	90	zagueiro	f	f	97	64
861	t	76	zagueiro	f	f	47	64
862	t	64	meio_campo	f	f	22	64
863	t	61	meio_campo	t	f	98	64
864	t	50	goleiro	f	f	125	64
865	t	63	atacante	t	f	55	64
866	f	40	zagueiro	f	f	211	64
867	f	43	zagueiro	f	t	215	64
868	f	42	atacante	f	f	263	64
869	f	18	atacante	f	t	35	64
870	f	20	zagueiro	f	f	84	64
871	t	67	meio_campo	f	f	69	65
872	t	68	goleiro	t	f	156	65
873	t	85	atacante	f	f	228	65
874	t	62	meio_campo	t	f	116	65
875	t	72	goleiro	t	f	258	65
876	t	88	meio_campo	t	f	45	65
877	t	84	atacante	t	f	129	65
878	t	63	zagueiro	t	f	127	65
879	t	58	goleiro	f	f	172	65
880	t	71	atacante	f	f	120	65
881	t	62	goleiro	f	f	222	65
882	f	10	goleiro	f	f	43	65
883	f	38	meio_campo	f	f	75	65
884	f	7	meio_campo	f	f	52	65
885	t	86	meio_campo	t	f	30	66
886	t	85	atacante	f	f	174	66
887	t	71	meio_campo	t	f	203	66
888	t	78	atacante	t	f	164	66
889	t	85	meio_campo	t	f	183	66
890	t	55	zagueiro	f	f	76	66
891	t	56	goleiro	f	f	161	66
892	t	77	atacante	f	f	295	66
893	t	57	meio_campo	f	f	2	66
894	t	69	goleiro	t	f	61	66
895	t	45	atacante	t	f	115	66
896	t	84	zagueiro	t	f	106	67
897	t	84	zagueiro	t	f	126	67
898	t	70	atacante	t	f	190	67
899	t	54	atacante	t	f	139	67
900	t	86	zagueiro	f	f	114	67
901	t	84	goleiro	t	f	218	67
902	t	51	goleiro	f	f	278	67
903	t	77	goleiro	f	f	91	67
904	t	61	meio_campo	t	f	78	67
905	t	66	goleiro	f	f	272	67
906	t	83	atacante	f	f	255	67
907	f	30	meio_campo	f	f	292	67
908	f	30	goleiro	f	t	148	67
909	f	32	goleiro	f	t	147	67
910	f	36	zagueiro	f	t	234	67
911	f	13	goleiro	f	f	269	67
912	t	54	meio_campo	t	f	143	68
913	t	48	goleiro	t	f	228	68
914	t	84	meio_campo	t	f	136	68
915	t	79	meio_campo	f	f	172	68
916	t	87	meio_campo	f	f	232	68
917	t	62	atacante	t	f	200	68
918	t	61	goleiro	t	f	281	68
919	t	72	zagueiro	t	f	123	68
920	t	60	atacante	t	f	264	68
921	t	81	atacante	f	f	294	68
922	t	82	zagueiro	t	f	300	68
923	f	30	goleiro	f	f	116	68
924	t	51	zagueiro	t	f	130	69
925	t	64	goleiro	f	f	74	69
926	t	65	zagueiro	t	f	288	69
927	t	76	goleiro	t	f	266	69
928	t	83	zagueiro	t	f	287	69
929	t	51	zagueiro	f	f	35	69
930	t	74	atacante	f	f	269	69
931	t	70	atacante	t	f	57	69
932	t	82	meio_campo	f	f	29	69
933	t	69	goleiro	t	f	202	69
934	t	88	goleiro	t	f	197	69
935	f	13	goleiro	f	t	286	69
936	f	37	meio_campo	f	t	159	69
937	f	29	zagueiro	f	t	204	69
938	t	82	meio_campo	f	f	56	70
939	t	56	goleiro	t	f	15	70
940	t	75	meio_campo	t	f	201	70
941	t	49	atacante	t	f	107	70
942	t	67	zagueiro	f	f	150	70
943	t	64	atacante	t	f	273	70
944	t	56	meio_campo	t	f	48	70
945	t	50	atacante	f	f	258	70
946	t	70	meio_campo	t	f	182	70
947	t	48	meio_campo	f	f	90	70
948	t	52	atacante	f	f	159	70
949	f	6	zagueiro	f	f	231	70
950	f	27	atacante	f	t	115	70
951	f	11	atacante	f	t	125	70
952	f	30	goleiro	f	f	51	70
953	f	40	meio_campo	f	t	127	70
954	t	64	goleiro	f	f	7	71
955	t	77	meio_campo	t	f	127	71
956	t	46	zagueiro	t	f	19	71
957	t	49	goleiro	f	f	90	71
958	t	60	goleiro	t	f	110	71
959	t	62	atacante	f	f	77	71
960	t	73	meio_campo	f	f	21	71
961	t	86	zagueiro	f	f	43	71
962	t	86	goleiro	t	f	129	71
963	t	82	atacante	f	f	190	71
964	t	45	goleiro	t	f	55	71
965	f	39	meio_campo	f	f	12	71
966	f	14	goleiro	f	f	54	71
967	f	30	goleiro	f	t	11	71
968	f	36	meio_campo	f	f	160	71
969	t	60	atacante	f	f	129	72
970	t	79	atacante	f	f	14	72
971	t	47	zagueiro	t	f	204	72
972	t	89	zagueiro	f	f	228	72
973	t	63	meio_campo	f	f	22	72
974	t	80	meio_campo	f	f	77	72
975	t	57	atacante	t	f	167	72
976	t	60	goleiro	t	f	245	72
977	t	62	goleiro	t	f	254	72
978	t	64	goleiro	f	f	217	72
979	t	46	meio_campo	f	f	137	72
980	f	19	zagueiro	f	t	205	72
981	f	22	atacante	f	f	50	72
982	f	29	goleiro	f	f	55	72
983	t	81	atacante	t	f	146	73
984	t	68	goleiro	f	f	23	73
985	t	58	zagueiro	f	f	258	73
986	t	74	meio_campo	t	f	28	73
987	t	45	meio_campo	f	f	246	73
988	t	47	goleiro	f	f	234	73
989	t	88	meio_campo	f	f	43	73
990	t	77	meio_campo	t	f	197	73
991	t	68	zagueiro	t	f	159	73
992	t	62	goleiro	t	f	125	73
993	t	45	zagueiro	t	f	64	73
994	f	18	goleiro	f	f	82	73
995	f	25	meio_campo	f	t	143	73
996	f	18	goleiro	f	t	59	73
997	t	65	meio_campo	t	f	167	74
998	t	75	zagueiro	t	f	214	74
999	t	51	atacante	f	f	258	74
1000	t	81	atacante	t	f	114	74
1001	t	54	zagueiro	t	f	161	74
1002	t	60	meio_campo	f	f	270	74
1003	t	65	zagueiro	t	f	268	74
1004	t	53	meio_campo	f	f	158	74
1005	t	46	goleiro	t	f	27	74
1006	t	77	meio_campo	t	f	225	74
1007	t	88	zagueiro	f	f	29	74
1008	f	28	goleiro	f	f	16	74
1009	t	80	atacante	f	f	123	75
1010	t	79	atacante	t	f	6	75
1011	t	61	meio_campo	t	f	283	75
1012	t	79	meio_campo	t	f	18	75
1013	t	66	atacante	f	f	134	75
1014	t	65	zagueiro	f	f	78	75
1015	t	59	zagueiro	t	f	231	75
1016	t	65	atacante	f	f	227	75
1017	t	68	atacante	t	f	172	75
1018	t	63	goleiro	f	f	115	75
1019	t	74	goleiro	t	f	152	75
1020	f	10	atacante	f	f	268	75
1021	f	34	meio_campo	f	t	45	75
1022	f	19	atacante	f	f	185	75
1023	f	11	zagueiro	f	t	15	75
1024	t	75	goleiro	f	f	55	76
1025	t	76	goleiro	f	f	76	76
1026	t	77	meio_campo	t	f	227	76
1027	t	78	atacante	t	f	84	76
1028	t	77	atacante	f	f	172	76
1029	t	59	zagueiro	t	f	160	76
1030	t	57	goleiro	f	f	171	76
1031	t	58	meio_campo	f	f	91	76
1032	t	69	meio_campo	f	f	196	76
1033	t	71	zagueiro	t	f	46	76
1034	t	48	zagueiro	t	f	44	76
1035	t	66	atacante	t	f	241	77
1036	t	51	goleiro	t	f	105	77
1037	t	51	zagueiro	f	f	135	77
1038	t	86	meio_campo	t	f	122	77
1039	t	63	zagueiro	f	f	177	77
1040	t	83	meio_campo	f	f	261	77
1041	t	46	meio_campo	t	f	172	77
1042	t	65	goleiro	t	f	86	77
1043	t	87	goleiro	f	f	179	77
1044	t	85	atacante	t	f	107	77
1045	t	57	meio_campo	t	f	25	77
1046	f	20	zagueiro	f	t	199	77
1047	f	37	atacante	f	f	237	77
1048	f	43	atacante	f	f	72	77
1049	f	42	goleiro	f	f	71	77
1050	f	22	meio_campo	f	t	79	77
1051	t	68	atacante	t	f	33	78
1052	t	65	goleiro	f	f	31	78
1053	t	62	goleiro	t	f	289	78
1054	t	68	atacante	t	f	262	78
1055	t	77	goleiro	f	f	11	78
1056	t	81	atacante	f	f	247	78
1057	t	76	meio_campo	f	f	159	78
1058	t	76	meio_campo	t	f	21	78
1059	t	58	zagueiro	t	f	115	78
1060	t	79	zagueiro	f	f	204	78
1061	t	90	goleiro	t	f	106	78
1062	f	23	zagueiro	f	f	132	78
1063	t	68	zagueiro	t	f	171	79
1064	t	53	goleiro	t	f	106	79
1065	t	82	zagueiro	t	f	125	79
1066	t	49	goleiro	t	f	23	79
1067	t	52	zagueiro	t	f	212	79
1068	t	50	zagueiro	t	f	73	79
1069	t	85	atacante	f	f	94	79
1070	t	86	atacante	t	f	189	79
1071	t	51	meio_campo	t	f	138	79
1072	t	63	meio_campo	f	f	124	79
1073	t	77	atacante	f	f	191	79
1074	f	17	meio_campo	f	f	88	79
1075	f	22	zagueiro	f	f	261	79
1076	f	15	meio_campo	f	f	155	79
1077	f	19	goleiro	f	f	128	79
1078	t	70	goleiro	f	f	72	80
1079	t	48	atacante	f	f	241	80
1080	t	49	zagueiro	t	f	172	80
1081	t	50	atacante	f	f	190	80
1082	t	90	meio_campo	f	f	111	80
1083	t	81	meio_campo	f	f	28	80
1084	t	48	goleiro	f	f	211	80
1085	t	53	goleiro	f	f	141	80
1086	t	71	atacante	t	f	246	80
1087	t	53	zagueiro	f	f	148	80
1088	t	64	goleiro	f	f	55	80
1089	f	41	goleiro	f	f	183	80
1090	f	8	goleiro	f	t	20	80
1091	f	12	zagueiro	f	t	165	80
1092	f	29	zagueiro	f	t	50	80
1093	t	81	goleiro	f	f	72	81
1094	t	82	atacante	f	f	48	81
1095	t	88	atacante	f	f	256	81
1096	t	71	zagueiro	t	f	184	81
1097	t	73	zagueiro	t	f	281	81
1098	t	62	meio_campo	f	f	37	81
1099	t	56	meio_campo	t	f	63	81
1100	t	70	zagueiro	f	f	219	81
1101	t	88	zagueiro	t	f	41	81
1102	t	47	zagueiro	f	f	129	81
1103	t	74	zagueiro	f	f	157	81
1104	f	36	meio_campo	f	f	220	81
1105	f	42	meio_campo	f	f	127	81
1106	f	5	meio_campo	f	f	185	81
1107	f	33	meio_campo	f	f	222	81
1108	f	37	meio_campo	f	t	254	81
1109	t	76	meio_campo	f	f	266	82
1110	t	72	goleiro	f	f	253	82
1111	t	63	atacante	f	f	216	82
1112	t	85	goleiro	f	f	35	82
1113	t	65	zagueiro	t	f	273	82
1114	t	83	meio_campo	t	f	63	82
1115	t	70	meio_campo	t	f	10	82
1116	t	81	meio_campo	f	f	34	82
1117	t	90	atacante	f	f	36	82
1118	t	80	goleiro	f	f	263	82
1119	t	50	atacante	f	f	235	82
1120	f	37	goleiro	f	f	272	82
1121	f	28	goleiro	f	f	293	82
1122	f	41	zagueiro	f	t	258	82
1123	f	14	atacante	f	f	265	82
1124	t	72	goleiro	t	f	141	83
1125	t	57	atacante	f	f	108	83
1126	t	66	goleiro	t	f	255	83
1127	t	62	zagueiro	t	f	175	83
1128	t	72	goleiro	f	f	24	83
1129	t	62	meio_campo	t	f	244	83
1130	t	48	zagueiro	t	f	93	83
1131	t	78	goleiro	f	f	273	83
1132	t	67	atacante	f	f	30	83
1133	t	61	atacante	f	f	259	83
1134	t	74	atacante	t	f	270	83
1135	f	12	meio_campo	f	f	17	83
1136	f	6	goleiro	f	f	69	83
1137	t	73	goleiro	f	f	165	84
1138	t	85	meio_campo	f	f	119	84
1139	t	69	zagueiro	f	f	213	84
1140	t	51	zagueiro	t	f	21	84
1141	t	78	zagueiro	t	f	130	84
1142	t	75	zagueiro	t	f	66	84
1143	t	85	zagueiro	f	f	20	84
1144	t	79	atacante	t	f	245	84
1145	t	66	zagueiro	f	f	257	84
1146	t	47	zagueiro	t	f	211	84
1147	t	85	meio_campo	t	f	195	84
1148	f	18	zagueiro	f	f	287	84
1149	f	25	meio_campo	f	f	75	84
1150	f	42	goleiro	f	f	293	84
1151	f	9	meio_campo	f	t	14	84
1152	f	34	zagueiro	f	f	118	84
1153	t	88	goleiro	f	f	29	85
1154	t	46	goleiro	f	f	105	85
1155	t	50	goleiro	f	f	272	85
1156	t	72	meio_campo	f	f	284	85
1157	t	72	goleiro	t	f	224	85
1158	t	62	zagueiro	t	f	169	85
1159	t	76	zagueiro	t	f	279	85
1160	t	84	atacante	f	f	186	85
1161	t	57	meio_campo	f	f	256	85
1162	t	59	goleiro	t	f	25	85
1163	t	52	zagueiro	t	f	63	85
1164	f	22	meio_campo	f	f	9	85
1165	f	13	atacante	f	t	166	85
1166	t	89	meio_campo	f	f	265	86
1167	t	63	zagueiro	t	f	5	86
1168	t	52	zagueiro	t	f	12	86
1169	t	58	atacante	f	f	103	86
1170	t	59	meio_campo	f	f	106	86
1171	t	84	zagueiro	f	f	3	86
1172	t	53	meio_campo	f	f	190	86
1173	t	52	goleiro	f	f	93	86
1174	t	59	goleiro	f	f	230	86
1175	t	51	atacante	f	f	269	86
1176	t	79	meio_campo	f	f	19	86
1177	f	5	goleiro	f	f	11	86
1178	f	14	atacante	f	f	300	86
1179	t	67	atacante	f	f	288	87
1180	t	74	atacante	t	f	125	87
1181	t	53	zagueiro	t	f	209	87
1182	t	85	meio_campo	t	f	119	87
1183	t	52	atacante	t	f	17	87
1184	t	78	meio_campo	f	f	190	87
1185	t	53	zagueiro	t	f	155	87
1186	t	79	goleiro	f	f	277	87
1187	t	90	meio_campo	t	f	72	87
1188	t	73	atacante	f	f	261	87
1189	t	71	atacante	t	f	169	87
1190	f	17	zagueiro	f	f	256	87
1191	f	44	zagueiro	f	t	250	87
1192	f	15	goleiro	f	f	211	87
1193	t	74	zagueiro	f	f	31	88
1194	t	88	atacante	t	f	47	88
1195	t	48	zagueiro	t	f	141	88
1196	t	76	goleiro	t	f	100	88
1197	t	78	meio_campo	f	f	239	88
1198	t	88	zagueiro	t	f	284	88
1199	t	59	meio_campo	t	f	213	88
1200	t	62	meio_campo	f	f	169	88
1201	t	73	zagueiro	f	f	93	88
1202	t	70	goleiro	f	f	112	88
1203	t	73	meio_campo	f	f	248	88
1204	t	49	atacante	f	f	239	89
1205	t	74	goleiro	f	f	150	89
1206	t	88	zagueiro	t	f	298	89
1207	t	67	atacante	f	f	201	89
1208	t	78	atacante	t	f	7	89
1209	t	90	zagueiro	f	f	140	89
1210	t	72	zagueiro	t	f	266	89
1211	t	51	zagueiro	t	f	287	89
1212	t	49	meio_campo	t	f	230	89
1213	t	52	zagueiro	f	f	175	89
1214	t	90	zagueiro	f	f	101	89
1215	f	40	atacante	f	t	172	89
1216	f	6	zagueiro	f	t	176	89
1217	f	16	goleiro	f	f	200	89
1218	f	7	zagueiro	f	f	78	89
1219	t	55	atacante	f	f	158	90
1220	t	75	zagueiro	f	f	249	90
1221	t	77	zagueiro	f	f	79	90
1222	t	49	atacante	t	f	54	90
1223	t	76	zagueiro	t	f	91	90
1224	t	76	zagueiro	f	f	134	90
1225	t	51	goleiro	f	f	15	90
1226	t	61	zagueiro	t	f	131	90
1227	t	85	meio_campo	t	f	88	90
1228	t	78	zagueiro	f	f	261	90
1229	t	68	meio_campo	f	f	241	90
1230	f	30	zagueiro	f	f	29	90
1231	t	82	goleiro	t	f	114	91
1232	t	46	meio_campo	f	f	9	91
1233	t	63	meio_campo	t	f	29	91
1234	t	52	zagueiro	t	f	83	91
1235	t	86	zagueiro	t	f	163	91
1236	t	90	meio_campo	t	f	65	91
1237	t	57	goleiro	f	f	99	91
1238	t	83	atacante	f	f	258	91
1239	t	86	atacante	f	f	222	91
1240	t	88	meio_campo	f	f	270	91
1241	t	70	meio_campo	f	f	138	91
1242	f	26	goleiro	f	f	284	91
1243	f	32	atacante	f	t	240	91
1244	f	28	goleiro	f	t	279	91
1245	f	26	meio_campo	f	t	229	91
1246	t	60	goleiro	t	f	14	92
1247	t	87	meio_campo	t	f	34	92
1248	t	85	zagueiro	t	f	288	92
1249	t	87	meio_campo	t	f	217	92
1250	t	81	goleiro	t	f	154	92
1251	t	86	atacante	t	f	13	92
1252	t	51	goleiro	f	f	56	92
1253	t	67	goleiro	f	f	190	92
1254	t	64	meio_campo	f	f	63	92
1255	t	60	zagueiro	f	f	196	92
1256	t	50	meio_campo	t	f	9	92
1257	f	21	goleiro	f	t	57	92
1258	t	61	atacante	t	f	50	93
1259	t	78	atacante	t	f	263	93
1260	t	66	atacante	f	f	97	93
1261	t	49	goleiro	t	f	256	93
1262	t	46	zagueiro	f	f	181	93
1263	t	73	goleiro	t	f	142	93
1264	t	60	goleiro	t	f	137	93
1265	t	74	meio_campo	t	f	225	93
1266	t	72	meio_campo	t	f	285	93
1267	t	80	goleiro	t	f	276	93
1268	t	84	zagueiro	f	f	27	93
1269	f	30	atacante	f	f	14	93
1270	f	41	meio_campo	f	t	70	93
1271	f	20	meio_campo	f	f	113	93
1272	t	47	zagueiro	f	f	30	94
1273	t	61	atacante	f	f	135	94
1274	t	70	meio_campo	t	f	16	94
1275	t	84	atacante	f	f	129	94
1276	t	65	goleiro	t	f	236	94
1277	t	84	goleiro	f	f	153	94
1278	t	68	meio_campo	t	f	76	94
1279	t	88	atacante	t	f	121	94
1280	t	71	meio_campo	t	f	296	94
1281	t	57	goleiro	f	f	183	94
1282	t	54	zagueiro	t	f	89	94
1283	t	54	meio_campo	f	f	136	95
1284	t	65	zagueiro	t	f	175	95
1285	t	50	atacante	f	f	79	95
1286	t	74	atacante	f	f	248	95
1287	t	62	goleiro	f	f	108	95
1288	t	47	meio_campo	f	f	99	95
1289	t	85	zagueiro	f	f	46	95
1290	t	48	meio_campo	t	f	6	95
1291	t	73	goleiro	f	f	265	95
1292	t	64	zagueiro	t	f	114	95
1293	t	59	atacante	f	f	111	95
1294	f	11	meio_campo	f	f	152	95
1295	f	31	atacante	f	f	105	95
1296	f	36	goleiro	f	f	178	95
1297	t	53	atacante	f	f	55	96
1298	t	67	goleiro	f	f	9	96
1299	t	84	meio_campo	t	f	67	96
1300	t	61	zagueiro	t	f	108	96
1301	t	54	meio_campo	f	f	158	96
1302	t	88	atacante	t	f	234	96
1303	t	55	goleiro	t	f	200	96
1304	t	70	meio_campo	f	f	132	96
1305	t	59	zagueiro	f	f	51	96
1306	t	71	goleiro	t	f	237	96
1307	t	67	meio_campo	f	f	39	96
1308	f	31	zagueiro	f	t	287	96
1309	f	16	atacante	f	f	58	96
1310	f	40	goleiro	f	t	153	96
1311	t	63	atacante	t	f	106	97
1312	t	67	goleiro	f	f	88	97
1313	t	72	goleiro	t	f	239	97
1314	t	46	atacante	t	f	230	97
1315	t	67	meio_campo	f	f	117	97
1316	t	79	goleiro	f	f	124	97
1317	t	83	zagueiro	t	f	248	97
1318	t	88	meio_campo	t	f	53	97
1319	t	82	goleiro	f	f	161	97
1320	t	74	meio_campo	f	f	65	97
1321	t	51	atacante	f	f	289	97
1322	f	28	zagueiro	f	f	218	97
1323	f	22	atacante	f	t	40	97
1324	f	28	goleiro	f	f	74	97
1325	f	22	meio_campo	f	f	219	97
1326	t	73	goleiro	t	f	270	98
1327	t	49	goleiro	f	f	101	98
1328	t	56	atacante	t	f	190	98
1329	t	74	atacante	t	f	234	98
1330	t	86	meio_campo	f	f	54	98
1331	t	77	goleiro	t	f	258	98
1332	t	59	zagueiro	f	f	223	98
1333	t	85	atacante	t	f	43	98
1334	t	80	meio_campo	f	f	56	98
1335	t	62	goleiro	t	f	249	98
1336	t	86	meio_campo	t	f	100	98
1337	f	33	zagueiro	f	t	51	98
1338	f	19	zagueiro	f	t	65	98
1339	f	11	goleiro	f	t	235	98
1340	t	65	meio_campo	f	f	20	99
1341	t	62	meio_campo	t	f	98	99
1342	t	45	atacante	f	f	165	99
1343	t	82	meio_campo	t	f	118	99
1344	t	45	zagueiro	f	f	103	99
1345	t	72	zagueiro	f	f	183	99
1346	t	87	atacante	t	f	233	99
1347	t	54	goleiro	f	f	58	99
1348	t	78	atacante	f	f	113	99
1349	t	48	goleiro	f	f	72	99
1350	t	45	zagueiro	t	f	19	99
1351	f	15	atacante	f	f	31	99
1352	f	12	zagueiro	f	f	275	99
1353	t	64	goleiro	t	f	292	100
1354	t	73	zagueiro	t	f	251	100
1355	t	60	atacante	f	f	116	100
1356	t	52	zagueiro	f	f	31	100
1357	t	58	atacante	t	f	147	100
1358	t	45	goleiro	f	f	290	100
1359	t	52	atacante	t	f	61	100
1360	t	54	zagueiro	t	f	101	100
1361	t	85	atacante	f	f	128	100
1362	t	68	zagueiro	f	f	187	100
1363	t	77	meio_campo	f	f	172	100
1364	f	44	meio_campo	f	t	197	100
1365	f	16	goleiro	f	f	48	100
\.


--
-- Data for Name: estadios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estadios (id, nome, capacidade, cidade, estado, pais) FROM stdin;
1	Maracanã	78838	Rio de Janeiro	RJ	Brasil
2	Estádio Nacional Mané Garrincha	69349	Brasília	DF	Brasil
3	Morumbi	67052	São Paulo	SP	Brasil
4	Arena Castelão	67000	Fortaleza	CE	Brasil
5	Mineirão	62162	Belo Horizonte	MG	Brasil
6	Arena do Grêmio	60540	Porto Alegre	RS	Brasil
7	Arruda	60044	Recife	PE	Brasil
8	Mangueirão	60000	Belém	PA	Brasil
9	Itaipava Arena Fonte Nova	55000	Salvador	BA	Brasil
10	Serra Dourada	54048	Goiânia	GO	Brasil
11	Estádio Municipal Parque do Sabiá	53350	Uberlândia	MG	Brasil
12	Beira Rio	51300	Porto Alegre	RS	Brasil
13	Olimpico Monumental	51080	Porto Alegre	RS	Brasil
14	Santa Cruz	50000	Ribeirão Preto	SP	Brasil
15	Arena Corinthians	48000	São Paulo	SP	Brasil
16	Arena MRV	47465	Belo Horizonte	MG	Brasil
17	Estádio Nilton Santos	46931	Rio de Janeiro	RJ	Brasil
18	Itaipava Arena Pernambuco	46610	Recife	PE	Brasil
19	Estádio Major Antônio Couto Pereira	45563	Curitiba	PR	Brasil
20	Morenão	45000	Campo Grande	MS	Brasil
21	Allianz Parque	45000	São Paulo	SP	Brasil
22	Almeidão	45000	João Pessoa	PB	Brasil
23	Eduardo José Farah	44414	Presidente Prudente	SP	Brasil
24	Albertão	44200	Teresina	PI	Brasil
25	Arena da Baixada	43900	Curitiba	PR	Brasil
26	Arena Pantanal	42968	Cuiabá	MT	Brasil
27	Arena da Amazônia	42374	Manaus	AM	Brasil
28	Arena das Dunas	42086	Natal	RN	Brasil
29	Pacaembu	40199	São Paulo	SP	Brasil
30	Estádio Governador João Castelo	40000	São Luís	MA	Brasil
31	Mário Helênio	40000	Juiz de Fora	MG	Brasil
32	Verdão	40000	Cuiabá	MT	Brasil
33	Teixeirão	36426	São José do Rio Preto	SP	Brasil
34	Estádio do Café	36000	Londrina	PR	Brasil
35	Arena Barueri	35000	Barueri	SP	Brasil
36	Serejão	35000	Taguatinga	DF	Brasil
\.


--
-- Data for Name: estatisticas_time_partida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estatisticas_time_partida (id, posse_bola, finalizacoes, escanteios, faltas_cometidas, impedimentos, defesas_goleiro, chutes_no_gol, chutes_fora, passes_certos, passes_errados, partida_id, time_id) FROM stdin;
1	58.07	9	4	9	5	8	6	8	135	15	1	6
2	43.77	20	8	18	2	1	6	8	395	24	1	17
3	54.14	18	6	19	0	9	2	6	138	55	2	18
4	55.77	18	6	10	0	2	2	3	115	53	2	16
5	51.4	8	7	19	3	2	2	6	138	41	3	9
6	48.07	17	5	17	1	8	8	2	202	50	3	15
7	50.09	6	9	16	4	6	10	5	200	73	4	12
8	53.2	11	8	16	2	4	2	9	116	47	4	3
9	57.12	9	1	6	0	7	9	4	346	43	5	16
10	56.99	14	8	16	4	7	3	6	128	44	5	19
11	47.84	6	6	5	1	4	2	10	359	12	6	4
12	55.7	20	5	7	1	3	9	9	208	78	6	8
13	52	5	4	12	4	10	3	9	203	25	7	5
14	54.51	10	10	17	0	8	8	4	311	31	7	1
15	50.87	16	2	10	0	6	5	9	259	68	8	14
16	52.25	15	6	10	2	4	4	10	326	77	8	8
17	55.65	5	2	13	5	9	6	5	290	79	9	12
18	49.48	6	4	14	3	3	10	7	196	33	9	5
19	47.92	18	10	10	4	6	10	10	185	51	10	9
20	53.92	8	8	9	3	10	2	7	236	45	10	13
21	59.69	18	8	8	2	0	5	10	231	36	11	12
22	59.54	9	7	18	2	6	10	7	247	47	11	11
23	47.9	14	3	19	3	1	8	4	251	16	12	16
24	49.74	7	6	14	1	4	2	3	200	36	12	13
25	40.86	20	8	5	1	7	8	6	124	36	13	17
26	55.63	17	9	19	2	6	6	2	242	46	13	18
27	48.62	5	10	6	0	8	7	7	250	13	14	15
28	57.13	7	8	7	1	7	9	10	109	44	14	14
29	51.78	15	1	20	4	3	10	10	209	32	15	1
30	57.38	6	9	6	3	1	4	8	254	60	15	6
31	50.22	12	1	18	4	8	5	10	138	11	16	19
32	51.9	18	3	9	4	3	9	2	275	27	16	18
33	42.12	20	6	18	4	8	9	3	323	78	17	10
34	59.85	11	5	5	0	9	10	10	160	73	17	5
35	58.02	18	7	7	0	6	9	3	162	39	18	4
36	52.89	6	2	8	2	0	8	5	276	46	18	18
37	45.91	10	2	11	0	7	4	10	234	52	19	3
38	45.88	13	5	10	1	2	2	2	284	12	19	1
39	43.37	17	2	14	4	8	6	6	115	40	20	7
40	56.01	19	10	9	4	10	10	3	293	15	20	4
41	48.32	16	8	18	1	5	2	5	125	64	21	3
42	45.12	17	8	15	5	7	2	7	267	22	21	20
43	44.87	11	10	5	1	1	3	6	219	77	22	3
44	55.56	18	2	20	2	3	4	7	323	37	22	8
45	57.37	19	2	16	2	9	3	9	269	57	23	3
46	43.77	12	7	11	4	3	2	8	316	32	23	20
47	58.67	12	9	16	0	2	10	7	116	42	24	15
48	48.06	10	2	10	3	10	8	8	364	42	24	9
49	52.32	11	5	17	3	2	9	2	302	52	25	4
50	52.24	6	10	9	1	2	2	3	268	64	25	11
51	41.81	6	10	10	3	1	3	2	135	11	26	1
52	54.23	9	1	5	5	4	2	2	183	16	26	12
53	44.86	6	10	13	2	3	4	8	119	31	27	9
54	51.29	5	3	16	5	2	3	2	290	53	27	4
55	40.58	20	1	15	1	9	9	6	207	43	28	2
56	45.29	17	9	17	3	6	4	9	238	22	28	19
57	47.66	16	10	9	0	8	9	9	397	78	29	5
58	57.55	14	9	20	1	4	5	7	174	53	29	10
59	43.12	20	8	16	2	3	10	2	277	67	30	16
60	42.56	18	10	7	5	8	4	7	143	68	30	4
61	59.63	13	2	19	5	1	10	5	181	24	31	19
62	56.29	20	9	6	0	3	3	10	379	60	31	16
63	57.13	17	8	11	5	6	8	5	239	21	32	18
64	59.92	11	8	13	5	2	5	6	164	29	32	11
65	50.18	9	6	10	2	0	7	4	232	38	33	10
66	57.8	14	2	11	1	5	10	7	180	31	33	16
67	59.57	9	2	10	1	7	9	8	209	27	34	3
68	54.63	15	1	10	2	1	7	6	151	67	34	18
69	58.25	7	2	20	3	3	2	7	164	75	35	5
70	47.96	11	4	17	0	8	6	6	150	73	35	17
71	47.28	6	10	16	5	10	2	8	322	52	36	3
72	50.44	12	10	6	3	7	3	8	388	42	36	14
73	56.52	13	1	5	4	6	4	3	108	79	37	6
74	51.64	16	7	12	4	6	2	9	122	26	37	7
75	57.46	17	6	16	3	10	6	8	280	28	38	8
76	50.07	9	7	11	3	8	9	10	347	66	38	20
77	55.34	9	5	20	1	9	6	5	256	23	39	1
78	48.96	13	10	6	5	6	7	10	185	45	39	14
79	49.3	18	8	17	1	2	8	10	177	38	40	19
80	52.59	11	5	16	2	2	10	8	187	63	40	14
81	48.52	7	5	20	4	5	8	3	109	66	41	14
82	56.11	6	4	11	1	9	8	4	221	68	41	16
83	47.53	8	4	7	5	5	9	7	380	26	42	5
84	48.58	20	9	6	1	7	10	9	282	55	42	16
85	49.93	12	7	6	1	1	5	9	179	72	43	13
86	48.98	18	9	9	0	6	5	6	294	42	43	16
87	42.74	9	1	5	5	5	5	2	148	64	44	3
88	44.65	7	6	11	3	0	4	9	257	69	44	13
89	51.22	19	9	6	5	7	5	9	110	67	45	16
90	48.25	5	6	7	4	6	6	8	108	10	45	6
91	59.69	14	9	9	1	8	2	9	332	69	46	5
92	55.22	11	1	5	2	4	10	5	338	55	46	3
93	41.17	15	9	9	0	8	4	9	112	22	47	14
94	40.76	17	6	15	5	7	4	4	300	11	47	17
95	46.19	5	7	8	0	9	8	3	323	76	48	7
96	42.6	9	10	7	3	7	4	3	268	22	48	1
97	53.41	11	10	6	3	9	3	4	275	64	49	15
98	57.71	16	1	18	3	1	3	2	396	68	49	19
99	48.36	16	4	12	4	1	8	8	355	57	50	15
100	50.01	13	9	18	2	0	5	3	322	23	50	1
101	51.26	14	8	9	0	0	7	9	316	56	51	1
102	50.46	14	4	17	1	1	9	3	309	13	51	10
103	53.11	16	9	13	0	4	7	9	281	62	52	8
104	49.52	20	2	14	0	1	6	5	247	34	52	5
105	51	17	5	16	1	2	9	9	126	13	53	9
106	43	14	9	18	2	5	9	9	315	62	53	20
107	52.18	18	7	12	5	6	10	10	349	41	54	19
108	56.08	15	3	11	4	7	6	10	213	12	54	5
109	44.59	9	6	11	4	3	9	2	340	78	55	9
110	49.12	11	7	10	1	10	4	10	309	36	55	7
111	47.48	5	8	20	2	10	6	5	152	19	56	16
112	41.12	9	4	11	2	3	5	10	258	77	56	15
113	47.17	14	9	15	5	10	5	7	204	22	57	12
114	58.32	17	5	6	5	9	4	7	105	17	57	15
115	53.16	13	10	15	3	10	10	9	125	31	58	8
116	40.55	19	4	13	2	0	10	3	335	26	58	1
117	44.44	15	6	5	4	0	2	3	239	52	59	12
118	55.46	8	2	14	1	6	3	5	385	17	59	9
119	48.15	8	2	19	4	7	9	9	201	46	60	7
120	55.6	5	2	5	3	2	2	6	305	40	60	20
121	54.86	13	2	13	2	4	9	8	256	69	61	4
122	46.12	6	8	6	0	7	7	3	383	50	61	8
123	51	13	4	6	2	9	8	10	370	16	62	4
124	51.12	11	3	19	4	6	7	8	280	59	62	17
125	42.5	9	3	5	0	0	10	3	147	76	63	6
126	52.5	9	5	18	3	9	2	6	281	56	63	1
127	45.77	17	3	15	4	2	8	8	132	13	64	13
128	56.1	8	3	15	1	5	8	8	145	73	64	17
129	48.15	5	2	8	1	4	8	5	141	80	65	14
130	47.57	12	6	7	3	10	6	5	391	29	65	10
131	58.2	9	1	13	5	1	2	2	196	32	66	7
132	48.55	9	10	11	5	8	7	3	273	65	66	8
133	42.67	9	7	14	4	9	7	4	376	40	67	9
134	51.58	18	10	12	4	2	8	5	302	56	67	8
135	59.48	14	6	5	2	2	7	8	136	46	68	11
136	46.4	11	6	20	5	8	7	9	146	25	68	12
137	53.57	5	8	17	5	2	9	7	328	68	69	3
138	45.28	11	9	13	2	8	9	4	103	27	69	17
139	58.97	18	8	18	5	5	6	4	300	49	70	2
140	54.56	20	3	20	3	7	3	8	252	12	70	13
141	50.49	13	1	16	0	7	7	3	354	14	71	12
142	52.36	20	5	19	0	0	4	3	274	22	71	5
143	56.04	8	4	8	5	4	7	10	330	61	72	6
144	51.6	7	3	5	4	8	7	2	210	27	72	15
145	56.06	20	1	13	4	9	9	5	103	43	73	14
146	56.2	13	4	16	0	2	10	10	300	24	73	4
147	57.33	14	3	9	2	5	6	5	198	40	74	8
148	57.79	12	8	6	1	6	3	8	270	61	74	18
149	43.45	5	3	20	4	7	7	3	216	60	75	7
150	51.89	10	9	18	1	1	2	3	318	30	75	11
151	57.12	13	3	13	4	5	4	8	232	79	76	18
152	50.97	6	10	20	2	0	10	4	111	77	76	1
153	49.67	9	3	15	3	7	9	10	343	47	77	5
154	51.34	8	1	13	5	5	6	3	266	12	77	17
155	56.43	15	10	8	2	1	7	3	227	16	78	4
156	44.1	10	4	15	3	7	10	8	280	25	78	11
157	43.94	13	6	17	2	1	5	7	230	49	79	16
158	50.85	6	8	9	1	4	10	6	275	12	79	5
159	47.9	9	8	6	1	3	9	8	167	68	80	12
160	47.12	17	1	7	4	3	2	4	363	62	80	17
161	49.35	15	6	13	0	10	6	6	132	76	81	13
162	47.65	5	8	9	2	0	2	3	377	53	81	14
163	56.97	5	10	15	1	4	5	4	211	66	82	6
164	48.28	15	1	17	0	1	3	8	396	25	82	3
165	52.54	7	10	7	2	3	3	7	203	16	83	11
166	44.32	11	8	17	3	5	3	8	235	55	83	14
167	42.61	7	2	14	4	5	6	9	342	52	84	12
168	52.28	15	9	15	3	2	8	9	215	40	84	7
169	49.68	13	5	6	5	4	6	9	359	19	85	14
170	46.35	9	6	15	5	3	7	4	264	74	85	16
171	45.82	20	3	11	2	7	3	9	171	27	86	14
172	53.54	12	2	9	5	8	4	8	311	18	86	1
173	55.44	7	4	10	2	9	5	9	131	43	87	4
174	57.97	5	4	19	4	9	5	4	211	47	87	3
175	50.32	10	1	11	0	6	5	5	392	71	88	18
176	50.27	8	3	18	1	8	6	10	291	18	88	9
177	59.99	18	10	17	5	8	5	7	118	57	89	16
178	58.97	16	1	14	1	9	2	6	203	33	89	13
179	57.7	6	6	13	4	8	9	8	192	41	90	3
180	50.21	10	7	18	4	4	4	4	396	71	90	16
181	58.14	12	5	18	5	8	4	2	300	70	91	6
182	52.52	16	7	12	5	3	7	4	122	31	91	10
183	56.22	7	5	13	1	7	10	5	216	49	92	12
184	46.11	6	8	17	0	8	7	6	317	23	92	7
185	43.19	17	7	16	2	9	7	3	383	50	93	15
186	48.03	10	9	13	0	3	6	3	250	40	93	2
187	56.25	16	3	20	4	6	9	7	377	76	94	11
188	50.37	19	5	9	4	1	6	9	173	67	94	15
189	46	18	2	20	1	5	2	8	286	45	95	5
190	52.69	16	4	13	1	3	5	8	355	30	95	15
191	40.69	17	10	18	1	7	8	10	190	26	96	19
192	55.36	15	6	16	0	3	10	8	266	72	96	14
193	49.07	20	1	17	2	5	8	3	316	35	97	19
194	53.1	16	8	9	4	6	7	2	165	67	97	20
195	59.14	12	8	16	5	3	8	3	278	79	98	17
196	44.95	11	3	7	4	6	3	4	222	73	98	2
197	52.14	5	9	17	5	7	5	4	154	50	99	10
198	48.41	7	2	11	0	2	2	3	257	26	99	4
199	57.26	5	2	6	0	0	2	2	288	23	100	11
200	42.27	5	8	19	1	9	5	7	209	12	100	15
\.


--
-- Data for Name: eventos_partida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.eventos_partida (id, tipo, minuto, descricao, jogador_id, partida_id) FROM stdin;
1	cartao_vermelho	46	Evento de tipo cartao_vermelho no minuto 46	5	1
2	cartao_vermelho	9	Evento de tipo cartao_vermelho no minuto 9	133	1
3	substituicao	67	Evento de tipo substituicao no minuto 67	273	1
4	cartao_vermelho	86	Evento de tipo cartao_vermelho no minuto 86	283	1
5	cartao_vermelho	42	Evento de tipo cartao_vermelho no minuto 42	252	1
6	cartao_amarelo	4	Evento de tipo cartao_amarelo no minuto 4	267	2
7	cartao_vermelho	41	Evento de tipo cartao_vermelho no minuto 41	79	2
8	cartao_amarelo	14	Evento de tipo cartao_amarelo no minuto 14	296	2
9	falta	88	Evento de tipo falta no minuto 88	176	2
10	cartao_amarelo	60	Evento de tipo cartao_amarelo no minuto 60	64	2
11	cartao_amarelo	61	Evento de tipo cartao_amarelo no minuto 61	40	2
12	falta	41	Evento de tipo falta no minuto 41	255	2
13	cartao_amarelo	45	Evento de tipo cartao_amarelo no minuto 45	112	3
14	cartao_amarelo	26	Evento de tipo cartao_amarelo no minuto 26	299	3
15	substituicao	45	Evento de tipo substituicao no minuto 45	173	3
16	substituicao	58	Evento de tipo substituicao no minuto 58	118	3
17	gol	10	Evento de tipo gol no minuto 10	291	3
18	cartao_vermelho	64	Evento de tipo cartao_vermelho no minuto 64	195	3
19	gol	49	Evento de tipo gol no minuto 49	203	3
20	falta	3	Evento de tipo falta no minuto 3	54	4
21	cartao_vermelho	36	Evento de tipo cartao_vermelho no minuto 36	164	4
22	gol	76	Evento de tipo gol no minuto 76	86	4
23	cartao_amarelo	72	Evento de tipo cartao_amarelo no minuto 72	229	4
24	falta	31	Evento de tipo falta no minuto 31	170	4
25	substituicao	10	Evento de tipo substituicao no minuto 10	156	4
26	cartao_vermelho	10	Evento de tipo cartao_vermelho no minuto 10	104	4
27	substituicao	60	Evento de tipo substituicao no minuto 60	127	5
28	cartao_vermelho	43	Evento de tipo cartao_vermelho no minuto 43	143	5
29	cartao_amarelo	58	Evento de tipo cartao_amarelo no minuto 58	193	5
30	gol	15	Evento de tipo gol no minuto 15	245	5
31	cartao_amarelo	34	Evento de tipo cartao_amarelo no minuto 34	271	5
32	gol	23	Evento de tipo gol no minuto 23	68	5
33	gol	19	Evento de tipo gol no minuto 19	61	6
34	falta	50	Evento de tipo falta no minuto 50	38	6
35	cartao_vermelho	42	Evento de tipo cartao_vermelho no minuto 42	171	6
36	falta	29	Evento de tipo falta no minuto 29	218	6
37	gol	66	Evento de tipo gol no minuto 66	18	6
38	cartao_amarelo	72	Evento de tipo cartao_amarelo no minuto 72	99	7
39	gol	58	Evento de tipo gol no minuto 58	255	7
40	cartao_amarelo	84	Evento de tipo cartao_amarelo no minuto 84	278	7
41	cartao_vermelho	63	Evento de tipo cartao_vermelho no minuto 63	41	7
42	cartao_amarelo	35	Evento de tipo cartao_amarelo no minuto 35	121	8
43	gol	87	Evento de tipo gol no minuto 87	13	8
44	cartao_amarelo	77	Evento de tipo cartao_amarelo no minuto 77	117	8
45	substituicao	9	Evento de tipo substituicao no minuto 9	16	8
46	gol	60	Evento de tipo gol no minuto 60	172	9
47	gol	82	Evento de tipo gol no minuto 82	30	9
48	cartao_amarelo	34	Evento de tipo cartao_amarelo no minuto 34	2	9
49	falta	22	Evento de tipo falta no minuto 22	17	9
50	cartao_amarelo	70	Evento de tipo cartao_amarelo no minuto 70	285	9
51	substituicao	52	Evento de tipo substituicao no minuto 52	116	10
52	falta	27	Evento de tipo falta no minuto 27	70	10
53	cartao_vermelho	59	Evento de tipo cartao_vermelho no minuto 59	112	10
54	falta	53	Evento de tipo falta no minuto 53	114	10
55	gol	38	Evento de tipo gol no minuto 38	16	10
56	falta	14	Evento de tipo falta no minuto 14	22	10
57	cartao_vermelho	42	Evento de tipo cartao_vermelho no minuto 42	211	10
58	cartao_amarelo	48	Evento de tipo cartao_amarelo no minuto 48	116	11
59	falta	37	Evento de tipo falta no minuto 37	205	11
60	substituicao	54	Evento de tipo substituicao no minuto 54	39	11
61	substituicao	87	Evento de tipo substituicao no minuto 87	198	11
62	falta	85	Evento de tipo falta no minuto 85	276	12
63	falta	16	Evento de tipo falta no minuto 16	66	12
64	substituicao	55	Evento de tipo substituicao no minuto 55	37	12
65	falta	82	Evento de tipo falta no minuto 82	204	12
66	gol	17	Evento de tipo gol no minuto 17	229	12
67	cartao_amarelo	14	Evento de tipo cartao_amarelo no minuto 14	185	12
68	falta	44	Evento de tipo falta no minuto 44	92	12
69	gol	1	Evento de tipo gol no minuto 1	210	12
70	falta	70	Evento de tipo falta no minuto 70	181	13
71	gol	31	Evento de tipo gol no minuto 31	125	13
72	gol	48	Evento de tipo gol no minuto 48	214	13
73	gol	27	Evento de tipo gol no minuto 27	100	13
74	cartao_vermelho	7	Evento de tipo cartao_vermelho no minuto 7	167	13
75	substituicao	87	Evento de tipo substituicao no minuto 87	298	13
76	cartao_amarelo	22	Evento de tipo cartao_amarelo no minuto 22	126	13
77	gol	49	Evento de tipo gol no minuto 49	265	14
78	cartao_amarelo	89	Evento de tipo cartao_amarelo no minuto 89	154	14
79	gol	90	Evento de tipo gol no minuto 90	79	14
80	cartao_vermelho	52	Evento de tipo cartao_vermelho no minuto 52	147	14
81	gol	50	Evento de tipo gol no minuto 50	111	14
82	substituicao	60	Evento de tipo substituicao no minuto 60	240	15
83	falta	34	Evento de tipo falta no minuto 34	31	15
84	substituicao	27	Evento de tipo substituicao no minuto 27	168	15
85	substituicao	23	Evento de tipo substituicao no minuto 23	211	15
86	substituicao	79	Evento de tipo substituicao no minuto 79	104	15
87	cartao_vermelho	57	Evento de tipo cartao_vermelho no minuto 57	143	15
88	cartao_vermelho	46	Evento de tipo cartao_vermelho no minuto 46	89	15
89	gol	36	Evento de tipo gol no minuto 36	157	16
90	cartao_vermelho	75	Evento de tipo cartao_vermelho no minuto 75	132	16
91	gol	11	Evento de tipo gol no minuto 11	130	16
92	gol	16	Evento de tipo gol no minuto 16	182	16
93	cartao_amarelo	51	Evento de tipo cartao_amarelo no minuto 51	58	16
94	substituicao	78	Evento de tipo substituicao no minuto 78	297	16
95	falta	88	Evento de tipo falta no minuto 88	84	16
96	gol	84	Evento de tipo gol no minuto 84	288	17
97	substituicao	56	Evento de tipo substituicao no minuto 56	279	17
98	substituicao	78	Evento de tipo substituicao no minuto 78	196	17
99	gol	53	Evento de tipo gol no minuto 53	54	17
100	gol	70	Evento de tipo gol no minuto 70	214	18
101	gol	39	Evento de tipo gol no minuto 39	193	18
102	substituicao	50	Evento de tipo substituicao no minuto 50	201	18
103	falta	51	Evento de tipo falta no minuto 51	12	18
104	falta	2	Evento de tipo falta no minuto 2	218	19
105	substituicao	25	Evento de tipo substituicao no minuto 25	213	19
106	cartao_amarelo	87	Evento de tipo cartao_amarelo no minuto 87	201	19
107	gol	31	Evento de tipo gol no minuto 31	167	19
108	gol	12	Evento de tipo gol no minuto 12	10	19
109	substituicao	16	Evento de tipo substituicao no minuto 16	132	19
110	cartao_amarelo	38	Evento de tipo cartao_amarelo no minuto 38	238	19
111	cartao_vermelho	35	Evento de tipo cartao_vermelho no minuto 35	160	19
112	falta	27	Evento de tipo falta no minuto 27	14	20
113	falta	60	Evento de tipo falta no minuto 60	267	20
114	gol	57	Evento de tipo gol no minuto 57	232	20
115	substituicao	12	Evento de tipo substituicao no minuto 12	272	20
116	falta	88	Evento de tipo falta no minuto 88	18	20
117	substituicao	19	Evento de tipo substituicao no minuto 19	44	20
118	cartao_vermelho	82	Evento de tipo cartao_vermelho no minuto 82	164	20
119	cartao_amarelo	77	Evento de tipo cartao_amarelo no minuto 77	14	20
120	cartao_vermelho	18	Evento de tipo cartao_vermelho no minuto 18	272	21
121	gol	80	Evento de tipo gol no minuto 80	50	21
122	cartao_amarelo	24	Evento de tipo cartao_amarelo no minuto 24	258	21
123	falta	19	Evento de tipo falta no minuto 19	194	21
124	substituicao	45	Evento de tipo substituicao no minuto 45	22	21
125	cartao_amarelo	1	Evento de tipo cartao_amarelo no minuto 1	133	21
126	falta	74	Evento de tipo falta no minuto 74	275	21
127	cartao_vermelho	21	Evento de tipo cartao_vermelho no minuto 21	223	22
128	substituicao	55	Evento de tipo substituicao no minuto 55	295	22
129	cartao_amarelo	46	Evento de tipo cartao_amarelo no minuto 46	192	22
130	gol	9	Evento de tipo gol no minuto 9	271	22
131	falta	37	Evento de tipo falta no minuto 37	185	22
132	cartao_amarelo	73	Evento de tipo cartao_amarelo no minuto 73	146	22
133	falta	81	Evento de tipo falta no minuto 81	56	22
134	cartao_amarelo	36	Evento de tipo cartao_amarelo no minuto 36	120	22
135	falta	87	Evento de tipo falta no minuto 87	278	23
136	cartao_vermelho	1	Evento de tipo cartao_vermelho no minuto 1	173	23
137	cartao_vermelho	70	Evento de tipo cartao_vermelho no minuto 70	2	23
138	cartao_amarelo	13	Evento de tipo cartao_amarelo no minuto 13	123	23
139	gol	1	Evento de tipo gol no minuto 1	193	23
140	falta	63	Evento de tipo falta no minuto 63	189	24
141	cartao_amarelo	80	Evento de tipo cartao_amarelo no minuto 80	100	24
142	substituicao	74	Evento de tipo substituicao no minuto 74	242	24
143	cartao_amarelo	8	Evento de tipo cartao_amarelo no minuto 8	159	25
144	cartao_vermelho	84	Evento de tipo cartao_vermelho no minuto 84	111	25
145	falta	24	Evento de tipo falta no minuto 24	138	25
146	falta	81	Evento de tipo falta no minuto 81	11	25
147	cartao_amarelo	76	Evento de tipo cartao_amarelo no minuto 76	92	25
148	falta	29	Evento de tipo falta no minuto 29	84	25
149	substituicao	32	Evento de tipo substituicao no minuto 32	268	25
150	cartao_amarelo	49	Evento de tipo cartao_amarelo no minuto 49	277	26
151	gol	20	Evento de tipo gol no minuto 20	42	26
152	cartao_vermelho	45	Evento de tipo cartao_vermelho no minuto 45	230	26
153	gol	6	Evento de tipo gol no minuto 6	123	26
154	substituicao	5	Evento de tipo substituicao no minuto 5	83	26
155	cartao_vermelho	61	Evento de tipo cartao_vermelho no minuto 61	14	26
156	gol	35	Evento de tipo gol no minuto 35	124	27
157	cartao_amarelo	56	Evento de tipo cartao_amarelo no minuto 56	5	27
158	falta	23	Evento de tipo falta no minuto 23	166	27
159	cartao_vermelho	65	Evento de tipo cartao_vermelho no minuto 65	294	27
160	substituicao	12	Evento de tipo substituicao no minuto 12	262	28
161	substituicao	35	Evento de tipo substituicao no minuto 35	138	28
162	cartao_amarelo	88	Evento de tipo cartao_amarelo no minuto 88	4	28
163	substituicao	61	Evento de tipo substituicao no minuto 61	132	28
164	gol	10	Evento de tipo gol no minuto 10	76	28
165	cartao_amarelo	88	Evento de tipo cartao_amarelo no minuto 88	167	28
166	falta	42	Evento de tipo falta no minuto 42	73	28
167	substituicao	11	Evento de tipo substituicao no minuto 11	253	29
168	gol	70	Evento de tipo gol no minuto 70	40	29
169	substituicao	43	Evento de tipo substituicao no minuto 43	133	29
170	gol	56	Evento de tipo gol no minuto 56	86	29
171	gol	41	Evento de tipo gol no minuto 41	46	29
172	cartao_vermelho	57	Evento de tipo cartao_vermelho no minuto 57	68	29
173	falta	40	Evento de tipo falta no minuto 40	79	29
174	substituicao	77	Evento de tipo substituicao no minuto 77	87	29
175	cartao_vermelho	80	Evento de tipo cartao_vermelho no minuto 80	282	30
176	cartao_vermelho	28	Evento de tipo cartao_vermelho no minuto 28	138	30
177	falta	1	Evento de tipo falta no minuto 1	210	30
178	gol	27	Evento de tipo gol no minuto 27	155	30
179	cartao_vermelho	85	Evento de tipo cartao_vermelho no minuto 85	158	30
180	substituicao	2	Evento de tipo substituicao no minuto 2	166	31
181	gol	2	Evento de tipo gol no minuto 2	12	31
182	cartao_amarelo	68	Evento de tipo cartao_amarelo no minuto 68	62	31
183	cartao_amarelo	33	Evento de tipo cartao_amarelo no minuto 33	13	31
184	cartao_amarelo	70	Evento de tipo cartao_amarelo no minuto 70	107	32
185	cartao_amarelo	86	Evento de tipo cartao_amarelo no minuto 86	283	32
186	substituicao	55	Evento de tipo substituicao no minuto 55	171	32
187	substituicao	5	Evento de tipo substituicao no minuto 5	238	32
188	gol	23	Evento de tipo gol no minuto 23	156	32
189	substituicao	3	Evento de tipo substituicao no minuto 3	174	32
190	gol	29	Evento de tipo gol no minuto 29	13	33
191	substituicao	5	Evento de tipo substituicao no minuto 5	9	33
192	substituicao	28	Evento de tipo substituicao no minuto 28	137	33
193	substituicao	13	Evento de tipo substituicao no minuto 13	204	33
194	cartao_vermelho	54	Evento de tipo cartao_vermelho no minuto 54	38	33
195	cartao_amarelo	5	Evento de tipo cartao_amarelo no minuto 5	183	34
196	cartao_vermelho	55	Evento de tipo cartao_vermelho no minuto 55	262	34
197	cartao_amarelo	83	Evento de tipo cartao_amarelo no minuto 83	243	34
198	cartao_amarelo	30	Evento de tipo cartao_amarelo no minuto 30	169	35
199	falta	46	Evento de tipo falta no minuto 46	298	35
200	falta	49	Evento de tipo falta no minuto 49	175	35
201	falta	9	Evento de tipo falta no minuto 9	23	35
202	cartao_vermelho	45	Evento de tipo cartao_vermelho no minuto 45	222	35
203	falta	31	Evento de tipo falta no minuto 31	221	35
204	gol	49	Evento de tipo gol no minuto 49	189	36
205	substituicao	88	Evento de tipo substituicao no minuto 88	234	36
206	cartao_amarelo	51	Evento de tipo cartao_amarelo no minuto 51	188	36
207	cartao_vermelho	82	Evento de tipo cartao_vermelho no minuto 82	223	36
208	falta	4	Evento de tipo falta no minuto 4	105	36
209	substituicao	84	Evento de tipo substituicao no minuto 84	152	36
210	falta	34	Evento de tipo falta no minuto 34	127	37
211	cartao_vermelho	16	Evento de tipo cartao_vermelho no minuto 16	152	37
212	cartao_vermelho	43	Evento de tipo cartao_vermelho no minuto 43	150	37
213	cartao_vermelho	20	Evento de tipo cartao_vermelho no minuto 20	74	37
214	gol	80	Evento de tipo gol no minuto 80	130	38
215	falta	27	Evento de tipo falta no minuto 27	225	38
216	falta	7	Evento de tipo falta no minuto 7	150	38
217	substituicao	26	Evento de tipo substituicao no minuto 26	8	38
218	cartao_vermelho	82	Evento de tipo cartao_vermelho no minuto 82	129	38
219	gol	68	Evento de tipo gol no minuto 68	219	38
220	cartao_vermelho	51	Evento de tipo cartao_vermelho no minuto 51	173	39
221	cartao_amarelo	15	Evento de tipo cartao_amarelo no minuto 15	252	39
222	gol	24	Evento de tipo gol no minuto 24	171	39
223	gol	17	Evento de tipo gol no minuto 17	70	40
224	falta	50	Evento de tipo falta no minuto 50	99	40
225	gol	80	Evento de tipo gol no minuto 80	162	40
226	falta	63	Evento de tipo falta no minuto 63	23	41
227	substituicao	35	Evento de tipo substituicao no minuto 35	205	41
228	falta	9	Evento de tipo falta no minuto 9	94	41
229	substituicao	10	Evento de tipo substituicao no minuto 10	101	42
230	cartao_vermelho	66	Evento de tipo cartao_vermelho no minuto 66	100	42
231	cartao_vermelho	69	Evento de tipo cartao_vermelho no minuto 69	280	42
232	cartao_vermelho	10	Evento de tipo cartao_vermelho no minuto 10	177	42
233	cartao_amarelo	20	Evento de tipo cartao_amarelo no minuto 20	280	42
234	cartao_amarelo	36	Evento de tipo cartao_amarelo no minuto 36	49	42
235	gol	33	Evento de tipo gol no minuto 33	212	43
236	substituicao	60	Evento de tipo substituicao no minuto 60	52	43
237	substituicao	44	Evento de tipo substituicao no minuto 44	29	43
238	substituicao	70	Evento de tipo substituicao no minuto 70	62	43
239	falta	25	Evento de tipo falta no minuto 25	165	43
240	gol	33	Evento de tipo gol no minuto 33	181	43
241	substituicao	41	Evento de tipo substituicao no minuto 41	109	44
242	cartao_vermelho	40	Evento de tipo cartao_vermelho no minuto 40	19	44
243	cartao_vermelho	16	Evento de tipo cartao_vermelho no minuto 16	156	44
244	gol	19	Evento de tipo gol no minuto 19	267	45
245	cartao_amarelo	3	Evento de tipo cartao_amarelo no minuto 3	122	45
246	substituicao	34	Evento de tipo substituicao no minuto 34	61	45
247	cartao_vermelho	32	Evento de tipo cartao_vermelho no minuto 32	52	45
248	gol	70	Evento de tipo gol no minuto 70	76	45
249	cartao_amarelo	65	Evento de tipo cartao_amarelo no minuto 65	175	45
250	falta	2	Evento de tipo falta no minuto 2	243	45
251	cartao_amarelo	47	Evento de tipo cartao_amarelo no minuto 47	277	46
252	gol	10	Evento de tipo gol no minuto 10	264	46
253	falta	36	Evento de tipo falta no minuto 36	295	46
254	cartao_amarelo	88	Evento de tipo cartao_amarelo no minuto 88	193	47
255	falta	14	Evento de tipo falta no minuto 14	231	47
256	cartao_amarelo	44	Evento de tipo cartao_amarelo no minuto 44	14	47
257	cartao_vermelho	16	Evento de tipo cartao_vermelho no minuto 16	106	47
258	cartao_vermelho	60	Evento de tipo cartao_vermelho no minuto 60	279	47
259	substituicao	57	Evento de tipo substituicao no minuto 57	276	47
260	substituicao	20	Evento de tipo substituicao no minuto 20	269	48
261	cartao_vermelho	59	Evento de tipo cartao_vermelho no minuto 59	115	48
262	substituicao	17	Evento de tipo substituicao no minuto 17	215	48
263	substituicao	43	Evento de tipo substituicao no minuto 43	108	49
264	cartao_vermelho	57	Evento de tipo cartao_vermelho no minuto 57	179	49
265	cartao_amarelo	22	Evento de tipo cartao_amarelo no minuto 22	254	49
266	cartao_vermelho	24	Evento de tipo cartao_vermelho no minuto 24	275	50
267	cartao_vermelho	27	Evento de tipo cartao_vermelho no minuto 27	131	50
268	cartao_amarelo	29	Evento de tipo cartao_amarelo no minuto 29	35	50
269	falta	66	Evento de tipo falta no minuto 66	186	50
270	substituicao	68	Evento de tipo substituicao no minuto 68	279	50
271	cartao_vermelho	49	Evento de tipo cartao_vermelho no minuto 49	163	50
272	cartao_vermelho	62	Evento de tipo cartao_vermelho no minuto 62	216	50
273	cartao_amarelo	72	Evento de tipo cartao_amarelo no minuto 72	38	50
274	gol	20	Evento de tipo gol no minuto 20	159	51
275	cartao_amarelo	68	Evento de tipo cartao_amarelo no minuto 68	266	51
276	falta	23	Evento de tipo falta no minuto 23	216	51
277	cartao_vermelho	88	Evento de tipo cartao_vermelho no minuto 88	226	52
278	cartao_vermelho	27	Evento de tipo cartao_vermelho no minuto 27	168	52
279	falta	89	Evento de tipo falta no minuto 89	269	52
280	substituicao	27	Evento de tipo substituicao no minuto 27	79	52
281	substituicao	37	Evento de tipo substituicao no minuto 37	85	52
282	cartao_amarelo	30	Evento de tipo cartao_amarelo no minuto 30	76	52
283	cartao_amarelo	64	Evento de tipo cartao_amarelo no minuto 64	150	52
284	cartao_amarelo	58	Evento de tipo cartao_amarelo no minuto 58	200	52
285	gol	1	Evento de tipo gol no minuto 1	241	53
286	cartao_vermelho	57	Evento de tipo cartao_vermelho no minuto 57	14	53
287	falta	61	Evento de tipo falta no minuto 61	173	53
288	substituicao	63	Evento de tipo substituicao no minuto 63	73	53
289	gol	37	Evento de tipo gol no minuto 37	257	53
290	cartao_amarelo	55	Evento de tipo cartao_amarelo no minuto 55	210	53
291	gol	11	Evento de tipo gol no minuto 11	274	53
292	substituicao	66	Evento de tipo substituicao no minuto 66	117	54
293	gol	51	Evento de tipo gol no minuto 51	54	54
294	cartao_amarelo	42	Evento de tipo cartao_amarelo no minuto 42	31	54
295	cartao_vermelho	8	Evento de tipo cartao_vermelho no minuto 8	154	54
296	falta	18	Evento de tipo falta no minuto 18	264	54
297	cartao_amarelo	28	Evento de tipo cartao_amarelo no minuto 28	126	54
298	gol	18	Evento de tipo gol no minuto 18	42	54
299	gol	34	Evento de tipo gol no minuto 34	193	54
300	gol	54	Evento de tipo gol no minuto 54	280	55
301	falta	62	Evento de tipo falta no minuto 62	287	55
302	cartao_vermelho	33	Evento de tipo cartao_vermelho no minuto 33	72	55
303	cartao_vermelho	48	Evento de tipo cartao_vermelho no minuto 48	133	55
304	substituicao	31	Evento de tipo substituicao no minuto 31	94	55
305	substituicao	35	Evento de tipo substituicao no minuto 35	76	55
306	falta	5	Evento de tipo falta no minuto 5	71	55
307	substituicao	60	Evento de tipo substituicao no minuto 60	208	56
308	cartao_vermelho	44	Evento de tipo cartao_vermelho no minuto 44	110	56
309	gol	35	Evento de tipo gol no minuto 35	238	56
310	falta	52	Evento de tipo falta no minuto 52	99	56
311	substituicao	11	Evento de tipo substituicao no minuto 11	6	56
312	substituicao	47	Evento de tipo substituicao no minuto 47	149	56
313	falta	49	Evento de tipo falta no minuto 49	20	56
314	substituicao	20	Evento de tipo substituicao no minuto 20	220	57
315	gol	17	Evento de tipo gol no minuto 17	269	57
316	falta	28	Evento de tipo falta no minuto 28	253	57
317	falta	47	Evento de tipo falta no minuto 47	191	57
318	gol	41	Evento de tipo gol no minuto 41	61	57
319	falta	7	Evento de tipo falta no minuto 7	281	57
320	substituicao	53	Evento de tipo substituicao no minuto 53	258	58
321	gol	88	Evento de tipo gol no minuto 88	195	58
322	gol	37	Evento de tipo gol no minuto 37	20	58
323	substituicao	32	Evento de tipo substituicao no minuto 32	145	59
324	substituicao	32	Evento de tipo substituicao no minuto 32	128	59
325	gol	40	Evento de tipo gol no minuto 40	153	59
326	gol	46	Evento de tipo gol no minuto 46	175	59
327	substituicao	21	Evento de tipo substituicao no minuto 21	48	60
328	falta	78	Evento de tipo falta no minuto 78	230	60
329	substituicao	79	Evento de tipo substituicao no minuto 79	249	60
330	gol	34	Evento de tipo gol no minuto 34	86	60
331	gol	59	Evento de tipo gol no minuto 59	252	60
332	substituicao	3	Evento de tipo substituicao no minuto 3	191	61
333	falta	36	Evento de tipo falta no minuto 36	23	61
334	cartao_vermelho	89	Evento de tipo cartao_vermelho no minuto 89	200	61
335	substituicao	17	Evento de tipo substituicao no minuto 17	177	61
336	cartao_vermelho	43	Evento de tipo cartao_vermelho no minuto 43	169	61
337	substituicao	6	Evento de tipo substituicao no minuto 6	206	61
338	cartao_vermelho	28	Evento de tipo cartao_vermelho no minuto 28	165	62
339	falta	35	Evento de tipo falta no minuto 35	134	62
340	gol	76	Evento de tipo gol no minuto 76	276	62
341	gol	88	Evento de tipo gol no minuto 88	159	63
342	cartao_vermelho	28	Evento de tipo cartao_vermelho no minuto 28	106	63
343	falta	72	Evento de tipo falta no minuto 72	231	63
344	substituicao	77	Evento de tipo substituicao no minuto 77	70	63
345	gol	90	Evento de tipo gol no minuto 90	271	63
346	substituicao	90	Evento de tipo substituicao no minuto 90	78	63
347	substituicao	8	Evento de tipo substituicao no minuto 8	180	63
348	falta	65	Evento de tipo falta no minuto 65	103	64
349	substituicao	49	Evento de tipo substituicao no minuto 49	41	64
350	cartao_amarelo	8	Evento de tipo cartao_amarelo no minuto 8	204	64
351	substituicao	35	Evento de tipo substituicao no minuto 35	199	64
352	gol	20	Evento de tipo gol no minuto 20	283	65
353	cartao_vermelho	37	Evento de tipo cartao_vermelho no minuto 37	79	65
354	falta	90	Evento de tipo falta no minuto 90	174	65
355	substituicao	40	Evento de tipo substituicao no minuto 40	283	66
356	cartao_vermelho	86	Evento de tipo cartao_vermelho no minuto 86	60	66
357	substituicao	86	Evento de tipo substituicao no minuto 86	162	66
358	cartao_amarelo	6	Evento de tipo cartao_amarelo no minuto 6	177	66
359	gol	51	Evento de tipo gol no minuto 51	136	67
360	gol	34	Evento de tipo gol no minuto 34	48	67
361	falta	21	Evento de tipo falta no minuto 21	239	67
362	falta	4	Evento de tipo falta no minuto 4	185	67
363	falta	54	Evento de tipo falta no minuto 54	67	67
364	falta	17	Evento de tipo falta no minuto 17	134	68
365	gol	59	Evento de tipo gol no minuto 59	248	68
366	gol	22	Evento de tipo gol no minuto 22	69	68
367	falta	67	Evento de tipo falta no minuto 67	13	68
368	gol	85	Evento de tipo gol no minuto 85	247	68
369	gol	15	Evento de tipo gol no minuto 15	135	68
370	cartao_amarelo	20	Evento de tipo cartao_amarelo no minuto 20	41	69
371	cartao_amarelo	7	Evento de tipo cartao_amarelo no minuto 7	139	69
372	substituicao	57	Evento de tipo substituicao no minuto 57	178	69
373	falta	74	Evento de tipo falta no minuto 74	172	70
374	gol	85	Evento de tipo gol no minuto 85	231	70
375	substituicao	70	Evento de tipo substituicao no minuto 70	90	70
376	substituicao	38	Evento de tipo substituicao no minuto 38	172	70
377	cartao_vermelho	51	Evento de tipo cartao_vermelho no minuto 51	96	70
378	falta	53	Evento de tipo falta no minuto 53	187	71
379	falta	21	Evento de tipo falta no minuto 21	293	71
380	substituicao	61	Evento de tipo substituicao no minuto 61	79	71
381	falta	20	Evento de tipo falta no minuto 20	19	72
382	cartao_vermelho	68	Evento de tipo cartao_vermelho no minuto 68	180	72
383	falta	40	Evento de tipo falta no minuto 40	267	72
384	cartao_amarelo	10	Evento de tipo cartao_amarelo no minuto 10	245	72
385	gol	86	Evento de tipo gol no minuto 86	300	73
386	cartao_amarelo	88	Evento de tipo cartao_amarelo no minuto 88	176	73
387	substituicao	32	Evento de tipo substituicao no minuto 32	147	73
388	cartao_amarelo	66	Evento de tipo cartao_amarelo no minuto 66	261	74
389	cartao_amarelo	30	Evento de tipo cartao_amarelo no minuto 30	148	74
390	cartao_vermelho	80	Evento de tipo cartao_vermelho no minuto 80	2	74
391	falta	43	Evento de tipo falta no minuto 43	80	74
392	cartao_amarelo	90	Evento de tipo cartao_amarelo no minuto 90	272	75
393	falta	14	Evento de tipo falta no minuto 14	26	75
394	falta	19	Evento de tipo falta no minuto 19	48	75
395	falta	46	Evento de tipo falta no minuto 46	127	75
396	falta	30	Evento de tipo falta no minuto 30	27	75
397	substituicao	80	Evento de tipo substituicao no minuto 80	151	75
398	substituicao	81	Evento de tipo substituicao no minuto 81	294	75
399	cartao_vermelho	66	Evento de tipo cartao_vermelho no minuto 66	79	75
400	cartao_amarelo	75	Evento de tipo cartao_amarelo no minuto 75	118	76
401	cartao_vermelho	32	Evento de tipo cartao_vermelho no minuto 32	51	76
402	cartao_amarelo	31	Evento de tipo cartao_amarelo no minuto 31	29	76
403	gol	4	Evento de tipo gol no minuto 4	118	76
404	substituicao	52	Evento de tipo substituicao no minuto 52	155	77
405	falta	14	Evento de tipo falta no minuto 14	109	77
406	gol	24	Evento de tipo gol no minuto 24	178	77
407	falta	5	Evento de tipo falta no minuto 5	104	77
408	cartao_vermelho	47	Evento de tipo cartao_vermelho no minuto 47	73	77
409	substituicao	83	Evento de tipo substituicao no minuto 83	281	78
410	cartao_amarelo	40	Evento de tipo cartao_amarelo no minuto 40	16	78
411	substituicao	38	Evento de tipo substituicao no minuto 38	239	78
412	gol	24	Evento de tipo gol no minuto 24	197	78
413	cartao_amarelo	55	Evento de tipo cartao_amarelo no minuto 55	190	79
414	cartao_vermelho	76	Evento de tipo cartao_vermelho no minuto 76	112	79
415	cartao_vermelho	19	Evento de tipo cartao_vermelho no minuto 19	24	79
416	substituicao	86	Evento de tipo substituicao no minuto 86	208	79
417	cartao_vermelho	7	Evento de tipo cartao_vermelho no minuto 7	182	80
418	falta	57	Evento de tipo falta no minuto 57	157	80
419	gol	18	Evento de tipo gol no minuto 18	274	80
420	substituicao	11	Evento de tipo substituicao no minuto 11	45	80
421	cartao_vermelho	78	Evento de tipo cartao_vermelho no minuto 78	195	80
422	falta	73	Evento de tipo falta no minuto 73	100	80
423	cartao_vermelho	47	Evento de tipo cartao_vermelho no minuto 47	40	81
424	cartao_amarelo	60	Evento de tipo cartao_amarelo no minuto 60	184	81
425	cartao_vermelho	31	Evento de tipo cartao_vermelho no minuto 31	57	81
426	falta	20	Evento de tipo falta no minuto 20	55	81
427	falta	90	Evento de tipo falta no minuto 90	96	81
428	substituicao	15	Evento de tipo substituicao no minuto 15	169	82
429	falta	14	Evento de tipo falta no minuto 14	53	82
430	gol	61	Evento de tipo gol no minuto 61	246	82
431	substituicao	38	Evento de tipo substituicao no minuto 38	129	82
432	falta	28	Evento de tipo falta no minuto 28	166	82
433	substituicao	48	Evento de tipo substituicao no minuto 48	180	82
434	cartao_vermelho	18	Evento de tipo cartao_vermelho no minuto 18	128	83
435	gol	48	Evento de tipo gol no minuto 48	186	83
436	cartao_amarelo	23	Evento de tipo cartao_amarelo no minuto 23	87	83
437	cartao_vermelho	59	Evento de tipo cartao_vermelho no minuto 59	26	84
438	cartao_vermelho	70	Evento de tipo cartao_vermelho no minuto 70	284	84
439	substituicao	21	Evento de tipo substituicao no minuto 21	263	84
440	cartao_amarelo	23	Evento de tipo cartao_amarelo no minuto 23	299	84
441	falta	2	Evento de tipo falta no minuto 2	84	85
442	gol	33	Evento de tipo gol no minuto 33	214	85
443	cartao_amarelo	80	Evento de tipo cartao_amarelo no minuto 80	202	85
444	cartao_amarelo	63	Evento de tipo cartao_amarelo no minuto 63	235	85
445	cartao_amarelo	34	Evento de tipo cartao_amarelo no minuto 34	188	85
446	cartao_vermelho	28	Evento de tipo cartao_vermelho no minuto 28	261	85
447	falta	7	Evento de tipo falta no minuto 7	208	85
448	cartao_amarelo	17	Evento de tipo cartao_amarelo no minuto 17	5	85
449	falta	3	Evento de tipo falta no minuto 3	226	86
450	cartao_amarelo	86	Evento de tipo cartao_amarelo no minuto 86	66	86
451	cartao_vermelho	41	Evento de tipo cartao_vermelho no minuto 41	118	86
452	cartao_vermelho	52	Evento de tipo cartao_vermelho no minuto 52	102	86
453	substituicao	75	Evento de tipo substituicao no minuto 75	136	86
454	substituicao	3	Evento de tipo substituicao no minuto 3	102	86
455	cartao_amarelo	14	Evento de tipo cartao_amarelo no minuto 14	175	87
456	cartao_vermelho	18	Evento de tipo cartao_vermelho no minuto 18	81	87
457	substituicao	46	Evento de tipo substituicao no minuto 46	286	87
458	cartao_amarelo	26	Evento de tipo cartao_amarelo no minuto 26	92	87
459	cartao_amarelo	54	Evento de tipo cartao_amarelo no minuto 54	215	87
460	falta	88	Evento de tipo falta no minuto 88	102	87
461	falta	62	Evento de tipo falta no minuto 62	58	87
462	gol	34	Evento de tipo gol no minuto 34	30	87
463	cartao_vermelho	51	Evento de tipo cartao_vermelho no minuto 51	117	88
464	gol	80	Evento de tipo gol no minuto 80	3	88
465	gol	6	Evento de tipo gol no minuto 6	280	88
466	cartao_amarelo	82	Evento de tipo cartao_amarelo no minuto 82	236	89
467	cartao_vermelho	85	Evento de tipo cartao_vermelho no minuto 85	15	89
468	substituicao	80	Evento de tipo substituicao no minuto 80	223	89
469	cartao_amarelo	64	Evento de tipo cartao_amarelo no minuto 64	277	89
470	cartao_vermelho	35	Evento de tipo cartao_vermelho no minuto 35	68	89
471	falta	74	Evento de tipo falta no minuto 74	38	89
472	cartao_amarelo	46	Evento de tipo cartao_amarelo no minuto 46	64	89
473	cartao_vermelho	67	Evento de tipo cartao_vermelho no minuto 67	146	90
474	cartao_amarelo	6	Evento de tipo cartao_amarelo no minuto 6	123	90
475	substituicao	21	Evento de tipo substituicao no minuto 21	221	90
476	substituicao	64	Evento de tipo substituicao no minuto 64	203	90
477	falta	45	Evento de tipo falta no minuto 45	27	90
478	substituicao	58	Evento de tipo substituicao no minuto 58	244	90
479	substituicao	39	Evento de tipo substituicao no minuto 39	57	90
480	falta	48	Evento de tipo falta no minuto 48	274	90
481	gol	89	Evento de tipo gol no minuto 89	179	91
482	substituicao	20	Evento de tipo substituicao no minuto 20	153	91
483	substituicao	31	Evento de tipo substituicao no minuto 31	152	91
484	substituicao	68	Evento de tipo substituicao no minuto 68	273	92
485	falta	89	Evento de tipo falta no minuto 89	113	92
486	cartao_vermelho	33	Evento de tipo cartao_vermelho no minuto 33	223	92
487	cartao_vermelho	46	Evento de tipo cartao_vermelho no minuto 46	88	92
488	cartao_vermelho	7	Evento de tipo cartao_vermelho no minuto 7	203	92
489	gol	58	Evento de tipo gol no minuto 58	256	92
490	substituicao	82	Evento de tipo substituicao no minuto 82	18	92
491	cartao_amarelo	81	Evento de tipo cartao_amarelo no minuto 81	245	93
492	cartao_vermelho	19	Evento de tipo cartao_vermelho no minuto 19	29	93
493	gol	25	Evento de tipo gol no minuto 25	289	93
494	cartao_vermelho	28	Evento de tipo cartao_vermelho no minuto 28	210	93
495	cartao_amarelo	60	Evento de tipo cartao_amarelo no minuto 60	166	93
496	cartao_vermelho	4	Evento de tipo cartao_vermelho no minuto 4	17	93
497	cartao_vermelho	18	Evento de tipo cartao_vermelho no minuto 18	219	93
498	gol	80	Evento de tipo gol no minuto 80	39	93
499	falta	49	Evento de tipo falta no minuto 49	257	94
500	gol	84	Evento de tipo gol no minuto 84	240	94
501	cartao_amarelo	21	Evento de tipo cartao_amarelo no minuto 21	87	94
502	cartao_vermelho	39	Evento de tipo cartao_vermelho no minuto 39	21	95
503	gol	68	Evento de tipo gol no minuto 68	262	95
504	cartao_vermelho	89	Evento de tipo cartao_vermelho no minuto 89	153	95
505	cartao_vermelho	32	Evento de tipo cartao_vermelho no minuto 32	236	95
506	gol	69	Evento de tipo gol no minuto 69	9	95
507	cartao_vermelho	76	Evento de tipo cartao_vermelho no minuto 76	233	96
508	substituicao	82	Evento de tipo substituicao no minuto 82	228	96
509	gol	61	Evento de tipo gol no minuto 61	9	96
510	substituicao	71	Evento de tipo substituicao no minuto 71	291	97
511	gol	19	Evento de tipo gol no minuto 19	240	97
512	gol	26	Evento de tipo gol no minuto 26	251	97
513	falta	20	Evento de tipo falta no minuto 20	23	97
514	cartao_amarelo	17	Evento de tipo cartao_amarelo no minuto 17	131	98
515	cartao_amarelo	89	Evento de tipo cartao_amarelo no minuto 89	112	98
516	cartao_amarelo	52	Evento de tipo cartao_amarelo no minuto 52	207	98
517	substituicao	14	Evento de tipo substituicao no minuto 14	236	98
518	substituicao	21	Evento de tipo substituicao no minuto 21	9	98
519	cartao_amarelo	58	Evento de tipo cartao_amarelo no minuto 58	300	98
520	cartao_amarelo	26	Evento de tipo cartao_amarelo no minuto 26	100	99
521	cartao_vermelho	37	Evento de tipo cartao_vermelho no minuto 37	290	99
522	cartao_vermelho	43	Evento de tipo cartao_vermelho no minuto 43	277	99
523	gol	31	Evento de tipo gol no minuto 31	191	99
524	substituicao	17	Evento de tipo substituicao no minuto 17	290	99
525	cartao_vermelho	3	Evento de tipo cartao_vermelho no minuto 3	257	99
526	cartao_amarelo	45	Evento de tipo cartao_amarelo no minuto 45	46	99
527	cartao_vermelho	86	Evento de tipo cartao_vermelho no minuto 86	129	99
528	cartao_amarelo	71	Evento de tipo cartao_amarelo no minuto 71	50	100
529	cartao_vermelho	69	Evento de tipo cartao_vermelho no minuto 69	42	100
530	gol	56	Evento de tipo gol no minuto 56	144	100
531	cartao_amarelo	7	Evento de tipo cartao_amarelo no minuto 7	232	100
\.


--
-- Data for Name: historico_jogadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.historico_jogadores (id, data_inicio, data_fim, jogador_id, time_id) FROM stdin;
1	2020-01-01	2021-12-31	1	8
2	2021-01-01	\N	1	14
3	2021-01-01	2022-12-31	2	19
4	2020-01-01	\N	2	16
5	2021-01-01	2022-12-31	3	1
6	2020-01-01	\N	3	14
7	2021-01-01	2022-12-31	4	12
8	2020-01-01	\N	4	7
9	2020-01-01	\N	5	16
10	2020-01-01	\N	6	19
11	2021-01-01	2022-12-31	7	9
12	2022-01-01	2023-12-31	7	5
13	2020-01-01	\N	7	17
14	2020-01-01	\N	8	11
15	2020-01-01	2021-12-31	9	18
16	2021-01-01	\N	9	10
17	2020-01-01	2021-12-31	10	12
18	2021-01-01	\N	10	7
19	2020-01-01	2021-12-31	11	19
20	2021-01-01	\N	11	10
21	2020-01-01	2021-12-31	12	6
22	2021-01-01	2022-12-31	12	13
23	2022-01-01	\N	12	3
24	2022-01-01	2023-12-31	13	12
25	2021-01-01	2022-12-31	13	20
26	2020-01-01	\N	13	18
27	2020-01-01	\N	14	19
28	2020-01-01	\N	15	2
29	2021-01-01	2022-12-31	16	5
30	2020-01-01	\N	16	17
31	2020-01-01	\N	17	17
32	2021-01-01	2022-12-31	18	15
33	2020-01-01	\N	18	2
34	2020-01-01	\N	19	20
35	2020-01-01	\N	20	15
36	2021-01-01	2022-12-31	21	9
37	2020-01-01	\N	21	7
38	2020-01-01	2021-12-31	22	18
39	2021-01-01	\N	22	4
40	2020-01-01	2021-12-31	23	18
41	2021-01-01	\N	23	12
42	2020-01-01	2021-12-31	24	11
43	2021-01-01	\N	24	7
44	2022-01-01	2023-12-31	25	13
45	2020-01-01	2021-12-31	25	9
46	2021-01-01	\N	25	13
47	2020-01-01	2021-12-31	26	20
48	2021-01-01	2022-12-31	26	12
49	2022-01-01	\N	26	15
50	2021-01-01	2022-12-31	27	8
51	2022-01-01	2023-12-31	27	16
52	2020-01-01	\N	27	15
53	2021-01-01	2022-12-31	28	7
54	2020-01-01	2021-12-31	28	16
55	2022-01-01	\N	28	5
56	2021-01-01	2022-12-31	29	3
57	2022-01-01	2023-12-31	29	14
58	2020-01-01	\N	29	4
59	2020-01-01	\N	30	4
60	2020-01-01	2021-12-31	31	6
61	2021-01-01	\N	31	8
62	2020-01-01	2021-12-31	32	15
63	2021-01-01	\N	32	18
64	2020-01-01	2021-12-31	33	20
65	2021-01-01	2022-12-31	33	3
66	2022-01-01	\N	33	7
67	2020-01-01	2021-12-31	34	6
68	2021-01-01	\N	34	6
69	2021-01-01	2022-12-31	35	9
70	2020-01-01	\N	35	7
71	2020-01-01	\N	36	8
72	2020-01-01	\N	37	18
73	2020-01-01	2021-12-31	38	19
74	2022-01-01	2023-12-31	38	1
75	2021-01-01	\N	38	7
76	2020-01-01	\N	39	9
77	2020-01-01	2021-12-31	40	15
78	2021-01-01	\N	40	12
79	2022-01-01	2023-12-31	41	4
80	2021-01-01	2022-12-31	41	15
81	2020-01-01	\N	41	18
82	2021-01-01	2022-12-31	42	5
83	2020-01-01	\N	42	2
84	2020-01-01	\N	43	3
85	2020-01-01	\N	44	15
86	2021-01-01	2022-12-31	45	1
87	2020-01-01	2021-12-31	45	4
88	2022-01-01	\N	45	1
89	2022-01-01	2023-12-31	46	16
90	2020-01-01	2021-12-31	46	11
91	2021-01-01	\N	46	8
92	2021-01-01	2022-12-31	47	4
93	2020-01-01	\N	47	7
94	2020-01-01	2021-12-31	48	19
95	2021-01-01	\N	48	7
96	2021-01-01	2022-12-31	49	11
97	2020-01-01	\N	49	10
98	2020-01-01	2021-12-31	50	15
99	2021-01-01	\N	50	8
100	2021-01-01	2022-12-31	51	20
101	2020-01-01	\N	51	1
102	2020-01-01	\N	52	12
103	2020-01-01	2021-12-31	53	3
104	2021-01-01	\N	53	13
105	2022-01-01	2023-12-31	54	8
106	2020-01-01	2021-12-31	54	7
107	2021-01-01	\N	54	15
108	2021-01-01	2022-12-31	55	1
109	2020-01-01	\N	55	17
110	2020-01-01	\N	56	19
111	2021-01-01	2022-12-31	57	15
112	2022-01-01	2023-12-31	57	14
113	2020-01-01	\N	57	4
114	2020-01-01	2021-12-31	58	19
115	2021-01-01	\N	58	16
116	2020-01-01	2021-12-31	59	14
117	2021-01-01	\N	59	1
118	2021-01-01	2022-12-31	60	2
119	2020-01-01	\N	60	11
120	2020-01-01	\N	61	4
121	2020-01-01	\N	62	16
122	2022-01-01	2023-12-31	63	17
123	2020-01-01	2021-12-31	63	2
124	2021-01-01	\N	63	5
125	2022-01-01	2023-12-31	64	11
126	2020-01-01	2021-12-31	64	8
127	2021-01-01	\N	64	19
128	2020-01-01	\N	65	8
129	2021-01-01	2022-12-31	66	1
130	2022-01-01	2023-12-31	66	19
131	2020-01-01	\N	66	1
132	2021-01-01	2022-12-31	67	4
133	2020-01-01	\N	67	17
134	2021-01-01	2022-12-31	68	20
135	2020-01-01	\N	68	9
136	2020-01-01	\N	69	14
137	2020-01-01	\N	70	16
138	2022-01-01	2023-12-31	71	7
139	2020-01-01	2021-12-31	71	2
140	2021-01-01	\N	71	6
141	2022-01-01	2023-12-31	72	11
142	2021-01-01	2022-12-31	72	3
143	2020-01-01	\N	72	7
144	2021-01-01	2022-12-31	73	19
145	2020-01-01	2021-12-31	73	8
146	2022-01-01	\N	73	15
147	2020-01-01	2021-12-31	74	11
148	2021-01-01	2022-12-31	74	13
149	2022-01-01	\N	74	14
150	2020-01-01	\N	75	2
151	2020-01-01	\N	76	7
152	2020-01-01	\N	77	2
153	2020-01-01	2021-12-31	78	9
154	2021-01-01	2022-12-31	78	11
155	2022-01-01	\N	78	19
156	2020-01-01	\N	79	2
157	2020-01-01	2021-12-31	80	14
158	2021-01-01	2022-12-31	80	13
159	2022-01-01	\N	80	9
160	2020-01-01	2021-12-31	81	19
161	2021-01-01	\N	81	17
162	2021-01-01	2022-12-31	82	2
163	2022-01-01	2023-12-31	82	3
164	2020-01-01	\N	82	2
165	2020-01-01	2021-12-31	83	10
166	2021-01-01	\N	83	9
167	2021-01-01	2022-12-31	84	15
168	2022-01-01	2023-12-31	84	1
169	2020-01-01	\N	84	14
170	2020-01-01	\N	85	18
171	2022-01-01	2023-12-31	86	10
172	2021-01-01	2022-12-31	86	13
173	2020-01-01	\N	86	17
174	2021-01-01	2022-12-31	87	10
175	2022-01-01	2023-12-31	87	4
176	2020-01-01	\N	87	12
177	2022-01-01	2023-12-31	88	6
178	2020-01-01	2021-12-31	88	3
179	2021-01-01	\N	88	5
180	2020-01-01	2021-12-31	89	5
181	2021-01-01	2022-12-31	89	4
182	2022-01-01	\N	89	15
183	2021-01-01	2022-12-31	90	6
184	2020-01-01	\N	90	20
185	2020-01-01	\N	91	4
186	2020-01-01	2021-12-31	92	11
187	2021-01-01	\N	92	19
188	2020-01-01	\N	93	16
189	2021-01-01	2022-12-31	94	6
190	2022-01-01	2023-12-31	94	12
191	2020-01-01	\N	94	16
192	2021-01-01	2022-12-31	95	2
193	2020-01-01	2021-12-31	95	12
194	2022-01-01	\N	95	18
195	2021-01-01	2022-12-31	96	3
196	2020-01-01	\N	96	18
197	2020-01-01	\N	97	12
198	2020-01-01	2021-12-31	98	19
199	2022-01-01	2023-12-31	98	20
200	2021-01-01	\N	98	2
201	2021-01-01	2022-12-31	99	19
202	2020-01-01	\N	99	4
203	2020-01-01	\N	100	19
204	2020-01-01	\N	101	12
205	2020-01-01	2021-12-31	102	4
206	2021-01-01	2022-12-31	102	2
207	2022-01-01	\N	102	16
208	2020-01-01	2021-12-31	103	11
209	2021-01-01	\N	103	15
210	2021-01-01	2022-12-31	104	2
211	2020-01-01	\N	104	1
212	2020-01-01	2021-12-31	105	2
213	2021-01-01	\N	105	17
214	2020-01-01	2021-12-31	106	6
215	2022-01-01	2023-12-31	106	5
216	2021-01-01	\N	106	10
217	2020-01-01	2021-12-31	107	8
218	2021-01-01	\N	107	5
219	2020-01-01	2021-12-31	108	15
220	2021-01-01	\N	108	9
221	2020-01-01	2021-12-31	109	4
222	2021-01-01	2022-12-31	109	10
223	2022-01-01	\N	109	3
224	2020-01-01	2021-12-31	110	13
225	2022-01-01	2023-12-31	110	11
226	2021-01-01	\N	110	7
227	2020-01-01	\N	111	20
228	2020-01-01	2021-12-31	112	2
229	2022-01-01	2023-12-31	112	15
230	2021-01-01	\N	112	16
231	2020-01-01	\N	113	12
232	2020-01-01	\N	114	12
233	2020-01-01	\N	115	9
234	2020-01-01	\N	116	20
235	2021-01-01	2022-12-31	117	17
236	2020-01-01	\N	117	8
237	2021-01-01	2022-12-31	118	20
238	2020-01-01	2021-12-31	118	19
239	2022-01-01	\N	118	17
240	2021-01-01	2022-12-31	119	1
241	2020-01-01	\N	119	9
242	2020-01-01	2021-12-31	120	16
243	2021-01-01	\N	120	9
244	2021-01-01	2022-12-31	121	18
245	2020-01-01	\N	121	6
246	2022-01-01	2023-12-31	122	17
247	2021-01-01	2022-12-31	122	19
248	2020-01-01	\N	122	11
249	2020-01-01	\N	123	6
250	2021-01-01	2022-12-31	124	11
251	2020-01-01	\N	124	7
252	2020-01-01	2021-12-31	125	15
253	2021-01-01	\N	125	15
254	2022-01-01	2023-12-31	126	14
255	2021-01-01	2022-12-31	126	2
256	2020-01-01	\N	126	8
257	2021-01-01	2022-12-31	127	13
258	2022-01-01	2023-12-31	127	1
259	2020-01-01	\N	127	1
260	2020-01-01	2021-12-31	128	1
261	2021-01-01	\N	128	15
262	2021-01-01	2022-12-31	129	2
263	2022-01-01	2023-12-31	129	17
264	2020-01-01	\N	129	9
265	2020-01-01	\N	130	9
266	2021-01-01	2022-12-31	131	3
267	2020-01-01	\N	131	10
268	2020-01-01	2021-12-31	132	16
269	2021-01-01	\N	132	13
270	2020-01-01	2021-12-31	133	1
271	2021-01-01	2022-12-31	133	1
272	2022-01-01	\N	133	12
273	2021-01-01	2022-12-31	134	18
274	2020-01-01	\N	134	16
275	2020-01-01	\N	135	12
276	2020-01-01	2021-12-31	136	16
277	2021-01-01	\N	136	18
278	2022-01-01	2023-12-31	137	15
279	2020-01-01	2021-12-31	137	14
280	2021-01-01	\N	137	13
281	2021-01-01	2022-12-31	138	11
282	2020-01-01	\N	138	17
283	2021-01-01	2022-12-31	139	16
284	2020-01-01	\N	139	14
285	2020-01-01	\N	140	19
286	2021-01-01	2022-12-31	141	18
287	2020-01-01	\N	141	14
288	2022-01-01	2023-12-31	142	3
289	2020-01-01	2021-12-31	142	3
290	2021-01-01	\N	142	2
291	2020-01-01	\N	143	4
292	2020-01-01	2021-12-31	144	14
293	2021-01-01	\N	144	18
294	2020-01-01	\N	145	6
295	2020-01-01	2021-12-31	146	16
296	2021-01-01	2022-12-31	146	5
297	2022-01-01	\N	146	13
298	2022-01-01	2023-12-31	147	9
299	2021-01-01	2022-12-31	147	13
300	2020-01-01	\N	147	6
301	2020-01-01	2021-12-31	148	11
302	2022-01-01	2023-12-31	148	8
303	2021-01-01	\N	148	6
304	2020-01-01	\N	149	14
305	2020-01-01	\N	150	9
306	2020-01-01	2021-12-31	151	12
307	2021-01-01	2022-12-31	151	18
308	2022-01-01	\N	151	18
309	2021-01-01	2022-12-31	152	15
310	2020-01-01	\N	152	2
311	2020-01-01	2021-12-31	153	1
312	2021-01-01	\N	153	16
313	2020-01-01	2021-12-31	154	12
314	2021-01-01	\N	154	19
315	2021-01-01	2022-12-31	155	16
316	2020-01-01	\N	155	6
317	2020-01-01	2021-12-31	156	2
318	2021-01-01	\N	156	6
319	2020-01-01	\N	157	19
320	2020-01-01	2021-12-31	158	10
321	2021-01-01	\N	158	3
322	2021-01-01	2022-12-31	159	17
323	2022-01-01	2023-12-31	159	17
324	2020-01-01	\N	159	8
325	2020-01-01	2021-12-31	160	6
326	2021-01-01	\N	160	12
327	2021-01-01	2022-12-31	161	3
328	2020-01-01	\N	161	15
329	2020-01-01	2021-12-31	162	4
330	2021-01-01	\N	162	19
331	2021-01-01	2022-12-31	163	13
332	2020-01-01	\N	163	15
333	2020-01-01	\N	164	12
334	2020-01-01	\N	165	20
335	2020-01-01	\N	166	4
336	2020-01-01	\N	167	18
337	2020-01-01	2021-12-31	168	6
338	2022-01-01	2023-12-31	168	17
339	2021-01-01	\N	168	11
340	2020-01-01	\N	169	9
341	2020-01-01	\N	170	14
342	2022-01-01	2023-12-31	171	15
343	2020-01-01	2021-12-31	171	14
344	2021-01-01	\N	171	5
345	2020-01-01	\N	172	10
346	2020-01-01	\N	173	15
347	2020-01-01	2021-12-31	174	9
348	2021-01-01	\N	174	1
349	2021-01-01	2022-12-31	175	9
350	2020-01-01	\N	175	17
351	2022-01-01	2023-12-31	176	11
352	2021-01-01	2022-12-31	176	11
353	2020-01-01	\N	176	5
354	2020-01-01	\N	177	8
355	2021-01-01	2022-12-31	178	18
356	2020-01-01	\N	178	3
357	2020-01-01	2021-12-31	179	17
358	2021-01-01	2022-12-31	179	15
359	2022-01-01	\N	179	18
360	2020-01-01	\N	180	12
361	2022-01-01	2023-12-31	181	7
362	2020-01-01	2021-12-31	181	11
363	2021-01-01	\N	181	6
364	2020-01-01	\N	182	3
365	2020-01-01	\N	183	19
366	2021-01-01	2022-12-31	184	8
367	2020-01-01	\N	184	18
368	2020-01-01	2021-12-31	185	18
369	2022-01-01	2023-12-31	185	3
370	2021-01-01	\N	185	20
371	2020-01-01	2021-12-31	186	14
372	2021-01-01	\N	186	4
373	2020-01-01	\N	187	16
374	2021-01-01	2022-12-31	188	1
375	2020-01-01	\N	188	19
376	2021-01-01	2022-12-31	189	12
377	2020-01-01	2021-12-31	189	16
378	2022-01-01	\N	189	13
379	2021-01-01	2022-12-31	190	14
380	2020-01-01	\N	190	13
381	2020-01-01	2021-12-31	191	8
382	2021-01-01	2022-12-31	191	16
383	2022-01-01	\N	191	19
384	2021-01-01	2022-12-31	192	16
385	2020-01-01	\N	192	14
386	2022-01-01	2023-12-31	193	5
387	2020-01-01	2021-12-31	193	2
388	2021-01-01	\N	193	4
389	2020-01-01	\N	194	13
390	2021-01-01	2022-12-31	195	5
391	2020-01-01	\N	195	12
392	2021-01-01	2022-12-31	196	14
393	2022-01-01	2023-12-31	196	12
394	2020-01-01	\N	196	17
395	2022-01-01	2023-12-31	197	8
396	2020-01-01	2021-12-31	197	11
397	2021-01-01	\N	197	4
398	2020-01-01	2021-12-31	198	5
399	2021-01-01	\N	198	16
400	2020-01-01	2021-12-31	199	5
401	2021-01-01	\N	199	5
402	2020-01-01	\N	200	9
403	2020-01-01	2021-12-31	201	13
404	2021-01-01	\N	201	18
405	2022-01-01	2023-12-31	202	15
406	2021-01-01	2022-12-31	202	9
407	2020-01-01	\N	202	5
408	2021-01-01	2022-12-31	203	7
409	2020-01-01	2021-12-31	203	17
410	2022-01-01	\N	203	5
411	2021-01-01	2022-12-31	204	13
412	2022-01-01	2023-12-31	204	13
413	2020-01-01	\N	204	4
414	2021-01-01	2022-12-31	205	4
415	2020-01-01	\N	205	20
416	2020-01-01	2021-12-31	206	12
417	2022-01-01	2023-12-31	206	6
418	2021-01-01	\N	206	12
419	2020-01-01	\N	207	4
420	2021-01-01	2022-12-31	208	18
421	2020-01-01	\N	208	16
422	2020-01-01	\N	209	4
423	2020-01-01	\N	210	15
424	2021-01-01	2022-12-31	211	11
425	2020-01-01	2021-12-31	211	19
426	2022-01-01	\N	211	11
427	2021-01-01	2022-12-31	212	8
428	2020-01-01	\N	212	17
429	2020-01-01	\N	213	13
430	2020-01-01	\N	214	20
431	2020-01-01	\N	215	10
432	2020-01-01	\N	216	18
433	2020-01-01	\N	217	15
434	2021-01-01	2022-12-31	218	5
435	2020-01-01	\N	218	14
436	2020-01-01	2021-12-31	219	8
437	2021-01-01	2022-12-31	219	5
438	2022-01-01	\N	219	12
439	2020-01-01	\N	220	19
440	2020-01-01	\N	221	7
441	2020-01-01	\N	222	10
442	2021-01-01	2022-12-31	223	9
443	2022-01-01	2023-12-31	223	8
444	2020-01-01	\N	223	3
445	2021-01-01	2022-12-31	224	17
446	2020-01-01	\N	224	1
447	2021-01-01	2022-12-31	225	16
448	2022-01-01	2023-12-31	225	6
449	2020-01-01	\N	225	9
450	2022-01-01	2023-12-31	226	8
451	2020-01-01	2021-12-31	226	17
452	2021-01-01	\N	226	3
453	2022-01-01	2023-12-31	227	12
454	2021-01-01	2022-12-31	227	11
455	2020-01-01	\N	227	5
456	2022-01-01	2023-12-31	228	1
457	2021-01-01	2022-12-31	228	2
458	2020-01-01	\N	228	19
459	2020-01-01	\N	229	5
460	2021-01-01	2022-12-31	230	2
461	2022-01-01	2023-12-31	230	13
462	2020-01-01	\N	230	6
463	2020-01-01	\N	231	12
464	2020-01-01	\N	232	16
465	2020-01-01	\N	233	2
466	2021-01-01	2022-12-31	234	15
467	2020-01-01	\N	234	11
468	2020-01-01	2021-12-31	235	8
469	2021-01-01	2022-12-31	235	14
470	2022-01-01	\N	235	2
471	2021-01-01	2022-12-31	236	13
472	2020-01-01	2021-12-31	236	18
473	2022-01-01	\N	236	20
474	2020-01-01	\N	237	1
475	2020-01-01	2021-12-31	238	14
476	2022-01-01	2023-12-31	238	10
477	2021-01-01	\N	238	15
478	2020-01-01	\N	239	3
479	2020-01-01	\N	240	1
480	2020-01-01	2021-12-31	241	19
481	2022-01-01	2023-12-31	241	11
482	2021-01-01	\N	241	12
483	2021-01-01	2022-12-31	242	16
484	2020-01-01	\N	242	2
485	2022-01-01	2023-12-31	243	5
486	2021-01-01	2022-12-31	243	2
487	2020-01-01	\N	243	18
488	2020-01-01	\N	244	17
489	2022-01-01	2023-12-31	245	19
490	2020-01-01	2021-12-31	245	18
491	2021-01-01	\N	245	11
492	2020-01-01	2021-12-31	246	8
493	2021-01-01	\N	246	1
494	2022-01-01	2023-12-31	247	2
495	2021-01-01	2022-12-31	247	7
496	2020-01-01	\N	247	20
497	2020-01-01	2021-12-31	248	18
498	2021-01-01	\N	248	14
499	2020-01-01	2021-12-31	249	14
500	2021-01-01	\N	249	12
501	2020-01-01	2021-12-31	250	15
502	2021-01-01	\N	250	3
503	2022-01-01	2023-12-31	251	3
504	2020-01-01	2021-12-31	251	8
505	2021-01-01	\N	251	11
506	2020-01-01	\N	252	7
507	2020-01-01	\N	253	14
508	2021-01-01	2022-12-31	254	14
509	2020-01-01	\N	254	1
510	2022-01-01	2023-12-31	255	9
511	2020-01-01	2021-12-31	255	19
512	2021-01-01	\N	255	11
513	2020-01-01	2021-12-31	256	10
514	2021-01-01	\N	256	20
515	2020-01-01	2021-12-31	257	20
516	2022-01-01	2023-12-31	257	12
517	2021-01-01	\N	257	13
518	2020-01-01	2021-12-31	258	12
519	2021-01-01	2022-12-31	258	5
520	2022-01-01	\N	258	9
521	2020-01-01	\N	259	20
522	2021-01-01	2022-12-31	260	5
523	2022-01-01	2023-12-31	260	4
524	2020-01-01	\N	260	19
525	2020-01-01	2021-12-31	261	10
526	2021-01-01	\N	261	16
527	2020-01-01	\N	262	18
528	2020-01-01	\N	263	2
529	2020-01-01	\N	264	12
530	2021-01-01	2022-12-31	265	20
531	2020-01-01	\N	265	12
532	2021-01-01	2022-12-31	266	3
533	2020-01-01	\N	266	4
534	2020-01-01	\N	267	17
535	2022-01-01	2023-12-31	268	15
536	2021-01-01	2022-12-31	268	3
537	2020-01-01	\N	268	9
538	2020-01-01	\N	269	5
539	2020-01-01	2021-12-31	270	17
540	2021-01-01	\N	270	4
541	2021-01-01	2022-12-31	271	7
542	2020-01-01	\N	271	13
543	2021-01-01	2022-12-31	272	6
544	2020-01-01	\N	272	14
545	2022-01-01	2023-12-31	273	20
546	2020-01-01	2021-12-31	273	3
547	2021-01-01	\N	273	9
548	2020-01-01	2021-12-31	274	2
549	2022-01-01	2023-12-31	274	12
550	2021-01-01	\N	274	11
551	2020-01-01	2021-12-31	275	4
552	2021-01-01	\N	275	18
553	2021-01-01	2022-12-31	276	14
554	2022-01-01	2023-12-31	276	2
555	2020-01-01	\N	276	19
556	2020-01-01	2021-12-31	277	11
557	2022-01-01	2023-12-31	277	15
558	2021-01-01	\N	277	20
559	2020-01-01	\N	278	7
560	2022-01-01	2023-12-31	279	1
561	2021-01-01	2022-12-31	279	11
562	2020-01-01	\N	279	18
563	2020-01-01	2021-12-31	280	15
564	2021-01-01	2022-12-31	280	4
565	2022-01-01	\N	280	19
566	2020-01-01	2021-12-31	281	19
567	2022-01-01	2023-12-31	281	5
568	2021-01-01	\N	281	18
569	2020-01-01	\N	282	3
570	2020-01-01	2021-12-31	283	11
571	2021-01-01	\N	283	1
572	2021-01-01	2022-12-31	284	16
573	2020-01-01	\N	284	1
574	2020-01-01	2021-12-31	285	20
575	2021-01-01	\N	285	8
576	2020-01-01	\N	286	4
577	2020-01-01	2021-12-31	287	17
578	2022-01-01	2023-12-31	287	18
579	2021-01-01	\N	287	7
580	2020-01-01	2021-12-31	288	7
581	2022-01-01	2023-12-31	288	17
582	2021-01-01	\N	288	10
583	2020-01-01	\N	289	18
584	2020-01-01	\N	290	13
585	2020-01-01	2021-12-31	291	4
586	2022-01-01	2023-12-31	291	18
587	2021-01-01	\N	291	18
588	2021-01-01	2022-12-31	292	16
589	2022-01-01	2023-12-31	292	5
590	2020-01-01	\N	292	3
591	2020-01-01	2021-12-31	293	11
592	2021-01-01	\N	293	7
593	2020-01-01	2021-12-31	294	9
594	2021-01-01	\N	294	16
595	2020-01-01	\N	295	15
596	2021-01-01	2022-12-31	296	18
597	2020-01-01	2021-12-31	296	10
598	2022-01-01	\N	296	18
599	2020-01-01	2021-12-31	297	20
600	2021-01-01	\N	297	1
601	2021-01-01	2022-12-31	298	14
602	2020-01-01	\N	298	2
603	2020-01-01	2021-12-31	299	7
604	2022-01-01	2023-12-31	299	1
605	2021-01-01	\N	299	11
606	2020-01-01	\N	300	17
\.


--
-- Data for Name: historico_tecnicos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.historico_tecnicos (id, data_inicio, data_fim, tecnico_id, time_id) FROM stdin;
1	2024-01-01	\N	1	1
2	2023-01-01	\N	2	2
3	2025-01-01	\N	3	3
4	2024-01-01	\N	4	4
5	2025-01-01	\N	5	5
6	2025-01-01	\N	6	6
7	2024-01-01	\N	7	7
8	2025-01-01	\N	8	8
9	2021-01-01	\N	9	9
10	2024-01-01	\N	10	10
11	2025-01-01	\N	11	11
12	2024-01-01	\N	12	12
13	2025-01-01	\N	13	13
14	2020-11-01	\N	14	14
15	2024-01-01	\N	15	15
16	2025-01-01	\N	16	16
17	2024-01-01	\N	17	17
18	2024-01-01	\N	18	18
19	2025-01-01	\N	19	19
20	2024-01-01	\N	20	20
\.


--
-- Data for Name: jogadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jogadores (id, nome, idade, altura, posicao, num_camisa, convocado_selecao_principal, convocado_selecao_juniores, estrangeiro, valor_mercado, time_id) FROM stdin;
1	Gabriel Delfim	22	1.88	goleiro	1	f	t	f	0.5	1
2	Everson	33	1.92	goleiro	22	t	f	f	2	1
3	Gabriel Átila	21	1.86	goleiro	32	f	t	f	0.3	1
4	Robert	20	1.85	goleiro	31	f	t	f	0.2	1
5	Igor Rabello	29	1.89	zagueiro	16	f	f	f	1.5	1
6	Rômulo	20	1.87	zagueiro	47	f	t	f	0.6	1
7	Lyanco	27	1.88	zagueiro	4	f	f	f	1.8	1
8	Alonso	30	1.9	zagueiro	6	t	f	t	3	1
9	Ivan Román	24	1.85	zagueiro	23	f	f	t	1.4	1
10	Vitor Hugo	23	1.84	zagueiro	14	f	t	f	0.9	1
11	Guilherme Arana	27	1.76	zagueiro	13	t	f	f	4.5	1
12	Saravia	30	1.78	zagueiro	26	f	f	t	1.2	1
13	Natanael	21	1.75	zagueiro	2	f	t	f	0.7	1
14	Caio	22	1.77	zagueiro	38	f	t	f	0.6	1
15	Rubens	23	1.83	meio_campo	44	f	f	f	1.2	1
16	Igor Gomes	25	1.78	meio_campo	17	f	f	f	2.5	1
17	Alan Franco	25	1.8	meio_campo	21	f	f	t	2	1
18	Gustavo Scarpa	30	1.76	meio_campo	10	t	f	f	4	1
19	Bernard	32	1.65	meio_campo	11	t	f	f	2.5	1
20	Fausto Vera	24	1.82	meio_campo	8	f	f	t	2.2	1
21	Gabriel Menino	23	1.76	meio_campo	25	t	f	f	3	1
22	Patrick	31	1.84	meio_campo	20	f	f	f	1.8	1
23	Hulk	37	1.8	atacante	7	t	f	f	3	1
24	Cadu	21	1.76	atacante	42	f	t	f	1	1
25	B. Palacios	24	1.75	atacante	30	f	f	t	1.4	1
26	Júnior Santos	29	1.84	atacante	37	f	f	f	2.1	1
27	Cuello	25	1.77	atacante	28	f	f	t	1.9	1
28	Caio Maia	20	1.78	atacante	39	f	t	f	0.5	1
29	Rony	29	1.7	atacante	33	f	f	f	2.7	1
30	João Marcelo	22	1.8	atacante	19	f	t	f	0.6	1
31	Danilo Fernandes	35	1.88	goleiro	1	f	f	f	0.8	2
32	Marcos Felipe	27	1.86	goleiro	22	f	f	f	1.2	2
33	Gabriel Souza	21	1.85	goleiro	40	f	t	f	0.5	2
34	Ronaldo	28	1.89	goleiro	96	f	f	f	0.9	2
35	Zé Guilherme	20	1.78	zagueiro	66	f	t	f	0.4	2
36	Kauã Davi	19	1.74	zagueiro	71	f	t	f	0.3	2
37	Santiago Arias	32	1.76	zagueiro	13	f	f	t	1	2
38	Luciano Juba	24	1.8	zagueiro	46	f	f	f	1.5	2
39	Iago Borduchi	26	1.81	zagueiro	25	f	f	f	1.3	2
40	Gilberto	30	1.77	zagueiro	2	f	f	f	1	2
41	Ramos Mingo	27	1.85	zagueiro	21	f	f	t	1.2	2
42	Kanu	26	1.86	zagueiro	4	f	f	f	1.8	2
43	David Duarte	29	1.88	zagueiro	33	f	f	f	1.1	2
44	Gabriel Xavier	22	1.84	zagueiro	3	f	t	f	0.9	2
45	Michel Araujo	27	1.78	meio_campo	15	f	f	t	1.8	2
46	Rodrigo Nestor	23	1.75	meio_campo	11	f	f	f	3	2
47	Erick	24	1.74	meio_campo	14	f	f	f	1.5	2
48	Vitinho	22	1.72	meio_campo	18	f	t	f	0.7	2
49	Jota	21	1.76	meio_campo	24	f	t	f	0.6	2
50	Rezende	26	1.79	meio_campo	5	f	f	f	1.4	2
51	Jean Lucas	25	1.8	meio_campo	6	f	f	f	2.1	2
52	Cauly	28	1.74	meio_campo	8	f	f	t	2.5	2
53	Caio Alexandre	24	1.77	meio_campo	19	f	f	f	2.2	2
54	Nicolás Acevedo	25	1.81	meio_campo	26	f	f	t	1.9	2
55	Everton Ribeiro	35	1.74	meio_campo	10	t	f	f	3.5	2
56	Kayky	21	1.75	atacante	37	f	t	f	1.2	2
57	Willian José	32	1.86	atacante	12	f	f	f	2.3	2
58	Erick Pulga	22	1.73	atacante	16	f	t	f	1	2
59	Tiago	20	1.8	atacante	34	f	t	f	0.6	2
60	Luciano Rodríguez	20	1.78	atacante	9	f	t	t	2.8	2
61	Ademir	29	1.7	atacante	7	f	f	f	1.4	2
62	Raul	27	1.88	goleiro	1	f	f	f	0.5	3
63	John	29	1.96	goleiro	12	f	f	f	1.2	3
64	Leo Linck	24	1.96	goleiro	24	f	f	f	0.9	3
65	Cristiano	20	1.8	goleiro	42	f	t	f	0.3	3
66	Luiz Pereira	19	1.8	goleiro	52	f	t	f	0.2	3
67	Vitinho	25	1.75	zagueiro	2	f	f	f	1	3
68	Mateo Ponte	21	1.78	zagueiro	4	f	f	t	1.2	3
69	Alex Telles	32	1.8	zagueiro	13	t	f	f	2	3
70	Bastos	34	1.83	zagueiro	15	f	f	t	1.5	3
71	Alexander Barboza	30	1.93	zagueiro	20	f	f	t	1.4	3
72	Fernando Marçal	36	1.75	zagueiro	21	f	f	f	0.8	3
73	Jair Paula	20	1.98	zagueiro	32	f	t	f	0.7	3
74	Ryan Couto	20	1.8	zagueiro	43	f	t	f	0.4	3
75	Lucyo	19	1.8	zagueiro	46	f	t	f	0.3	3
76	Victor Hugo	18	1.7	zagueiro	48	f	t	f	0.4	3
77	Kauã Branco	18	1.8	zagueiro	53	f	t	f	0.3	3
78	David Loiola	22	1.8	zagueiro	57	f	f	f	0.5	3
79	Vinícius Lima Serafim	20	1.78	zagueiro	63	f	t	f	0.4	3
80	Marcos Vinagre	18	1.8	zagueiro	64	f	t	f	0.3	3
81	Cuiabano	22	1.8	zagueiro	66	f	f	f	1.1	3
82	Danilo	29	1.83	meio_campo	5	f	f	f	1.2	3
83	Patrick de Paula	25	1.78	meio_campo	6	f	f	f	1.5	3
84	Marlon Freitas	30	1.85	meio_campo	17	f	f	f	1.1	3
85	Kauê	20	1.75	meio_campo	18	f	t	f	0.6	3
86	Allan	34	1.75	meio_campo	25	f	f	f	0.8	3
87	Gregore	31	1.8	meio_campo	26	f	f	f	1	3
88	Newton	25	1.8	meio_campo	28	f	f	f	0.6	3
89	Cauã Zappelini Joaquim	18	1.8	meio_campo	58	f	t	f	0.4	3
90	Kauan Almeida Toledo	19	1.8	meio_campo	59	f	t	f	0.3	3
91	Thiago Lauro	19	1.8	meio_campo	68	f	t	t	0.5	3
92	Kauan Lindes	21	1.8	meio_campo	77	f	t	f	0.3	3
93	Lucas Camilo	18	1.8	meio_campo	78	f	t	f	0.3	3
94	Bernardo Valim	19	1.88	meio_campo	80	f	t	f	0.4	3
95	Artur	27	1.65	atacante	7	f	f	f	1.7	3
96	Rwan Seco	23	1.85	atacante	9	f	f	f	1.1	3
97	Jefferson Savarino	28	1.68	atacante	10	f	f	t	2.5	3
98	Matheus Martins	21	1.78	atacante	11	f	t	f	1.6	3
99	Nathan Ribeiro Fernandes	20	1.93	atacante	16	f	t	f	1	3
100	Kayke	18	1.8	atacante	19	f	t	f	0.4	3
101	Santiago Rodríguez	27	1.7	atacante	23	f	f	t	1.8	3
102	Elias Manoel	23	1.75	atacante	33	f	f	f	1.1	3
103	Gonzalo Mastriani	32	1.8	atacante	39	f	f	t	1.5	3
104	Caio Ribeiro Do Valle Silva	17	1.8	atacante	45	f	t	f	0.3	3
105	Jeffinho	25	1.75	atacante	47	f	f	f	1	3
106	Yarlen Faustino Augusto	19	1.8	atacante	67	f	t	f	0.4	3
107	Rafael Lobato	19	1.7	atacante	69	f	t	f	0.4	3
108	Fortunato	19	1.8	atacante	79	f	t	f	0.3	3
109	Igor Jesus	24	1.8	atacante	99	f	f	f	1.4	3
110	Richard	34	1.85	goleiro	1	f	f	f	0.9	4
111	Fernando Miguel	40	1.93	goleiro	16	f	f	f	0.6	4
112	Keiller	28	1.93	goleiro	18	f	f	f	0.8	4
113	Bruno	31	1.96	goleiro	94	f	f	f	0.7	4
114	Rafael Ramos	30	1.68	zagueiro	2	f	f	t	0.9	4
115	Marllon	33	1.85	zagueiro	3	f	f	f	1.2	4
116	Luiz Otavio	36	1.91	zagueiro	13	f	f	f	0.8	4
117	Gabriel Lacerda	25	1.88	zagueiro	15	f	f	f	1	4
118	Jackson	30	1.75	zagueiro	20	f	f	f	0.9	4
119	Willian Machado	28	1.83	zagueiro	23	f	f	f	1	4
120	Nicolas	28	1.83	zagueiro	30	f	f	f	0.9	4
121	Éder	30	1.83	zagueiro	33	f	f	f	1	4
122	Ramon Menezes	29	1.85	zagueiro	40	f	f	f	0.8	4
123	Marcos Victor	23	1.85	zagueiro	44	f	t	f	0.6	4
124	Fabiano	25	1.75	zagueiro	70	f	f	f	0.8	4
125	Matheus Bahia	25	1.8	zagueiro	79	f	f	f	0.9	4
126	Richardson	33	1.75	meio_campo	6	f	f	f	0.9	4
127	Matheus Andrade	22	1.75	meio_campo	8	f	t	f	1.2	4
128	Lucas Mugni	33	1.8	meio_campo	10	f	f	t	1.1	4
129	Romulo	23	1.78	meio_campo	19	f	t	f	0.8	4
130	Silvio Martínez	27	1.7	meio_campo	22	f	f	t	1	4
131	Jorge Recalde	32	1.78	meio_campo	28	f	f	t	1.1	4
132	Lucas Lima	24	1.78	meio_campo	31	f	t	f	0.9	4
133	Fernando Sobral	30	1.78	meio_campo	88	f	f	f	1	4
134	Lourenco	27	1.7	meio_campo	97	f	f	f	0.8	4
135	Bruno	30	1.75	atacante	90	f	f	f	0.8	4
136	Pedro Henrique	34	1.8	atacante	7	f	f	f	1	4
137	Pedro Raúl	28	1.93	atacante	9	f	f	f	2	4
138	Aylon	33	1.8	atacante	11	f	f	f	0.9	4
139	João Victor	21	1.68	atacante	17	f	t	f	0.7	4
140	Antonio Galeano	25	1.7	atacante	27	f	f	t	1.2	4
141	Fernando	27	1.75	atacante	77	f	f	f	0.8	4
142	Guilherme Luiz	20	1.78	atacante	80	f	t	f	0.6	4
143	Lelê	27	1.78	atacante	99	f	f	f	0.9	4
144	Felipe Longo	21	1.86	goleiro	1	f	t	f	0.5	5
145	Hugo Souza	25	1.9	goleiro	12	f	f	f	1.2	5
146	M. Donelli	23	1.87	goleiro	24	f	t	f	0.9	5
147	André Ramalho	32	1.85	zagueiro	3	f	f	f	1.6	5
148	Cacá	25	1.84	zagueiro	4	f	f	f	1.3	5
149	Félix Torres	27	1.88	zagueiro	5	f	f	t	2	5
150	Gustavo Henrique	31	1.96	zagueiro	6	f	f	f	1.4	5
151	João Pedro	22	1.8	zagueiro	7	f	t	f	1	5
152	Diego Palacios	25	1.75	zagueiro	8	f	f	t	1.5	5
153	Fabrizio Angileri	29	1.79	zagueiro	9	f	f	t	1.4	5
154	Hugo	24	1.78	zagueiro	10	f	f	f	1.1	5
155	Léo Mana	21	1.76	zagueiro	11	f	t	f	0.9	5
156	Matheuzinho	23	1.74	zagueiro	13	f	f	f	1.2	5
157	Matheus Bidu	24	1.78	zagueiro	14	f	f	f	1.1	5
158	Alex Santana	28	1.82	meio_campo	15	f	f	f	1.6	5
159	André Carrillo	33	1.78	meio_campo	16	f	f	t	1.7	5
160	Breno Bidon	20	1.76	meio_campo	17	f	t	f	1	5
161	Charles	29	1.8	meio_campo	18	f	f	f	1.3	5
162	José Martínez	25	1.78	meio_campo	19	f	f	t	1.5	5
163	Ryan	22	1.75	meio_campo	20	f	t	f	0.9	5
164	Maycon	27	1.77	meio_campo	21	f	f	f	1.4	5
165	Raniele	26	1.81	meio_campo	22	f	f	f	1.3	5
166	Igor Coronado	32	1.74	meio_campo	23	f	f	f	1.8	5
167	Rodrigo Garro	26	1.79	meio_campo	25	f	f	t	2.2	5
168	Giovane	21	1.76	atacante	26	f	t	f	1	5
169	Héctor Hernández	28	1.83	atacante	27	f	f	t	1.7	5
170	Kayke	19	1.74	atacante	28	f	t	f	0.8	5
171	Memphis	30	1.78	atacante	29	t	f	t	2.5	5
172	Romero	31	1.76	atacante	30	f	f	t	1.5	5
173	Talles Magno	22	1.84	atacante	31	f	f	f	2.8	5
174	Yuri Alberto	24	1.83	atacante	32	f	f	f	3	5
175	Cássio	37	1.96	goleiro	1	t	f	f	1.2	6
176	Leonardo	23	1.85	goleiro	41	f	t	f	0.6	6
177	Otávio	19	1.83	goleiro	81	f	t	f	0.5	6
178	Kaiki	22	1.73	zagueiro	6	f	t	f	1	6
179	William	30	1.75	zagueiro	12	f	f	f	1.1	6
180	Mateo Gamarra	24	1.8	zagueiro	14	f	f	t	1.3	6
181	Fabrício Bruno	29	1.91	zagueiro	15	f	f	f	1.5	6
182	Fagner	35	1.68	zagueiro	23	f	f	f	1	6
183	Lucas Villalba	30	1.78	zagueiro	25	f	f	t	1.2	6
184	Jonathan Jesus	20	1.83	zagueiro	34	f	t	f	0.7	6
185	João Marcelo	24	1.88	zagueiro	43	f	f	f	1.1	6
186	Walace	30	1.88	meio_campo	5	f	f	f	1.4	6
187	Matheus Henrique	27	1.75	meio_campo	8	f	f	f	1.5	6
188	Matheus Pereira	27	1.8	meio_campo	10	f	f	f	2.2	6
189	Lucas Silva	32	1.8	meio_campo	16	f	f	f	1.3	6
190	Carlos Eduardo	35	1.83	meio_campo	21	f	f	f	1	6
191	Lucas Romero	31	1.73	meio_campo	29	f	f	t	1.4	6
192	José Janderson Da Silva Marques	19	1.78	meio_campo	32	f	t	f	0.7	6
193	Murilo Rhikman	19	1.83	meio_campo	35	f	t	f	0.6	6
194	Rodriguinho	21	1.7	meio_campo	75	f	t	f	0.8	6
195	Japa	21	1.78	meio_campo	77	f	t	f	0.7	6
196	Christian	24	1.75	meio_campo	88	f	f	f	1.2	6
197	Dudu	33	1.68	atacante	7	t	f	f	1.6	6
198	Gabriel Barbosa	28	1.78	atacante	9	t	f	f	2.5	6
199	Yannick Bolasie	35	1.88	atacante	11	f	f	t	1.2	6
200	Marquinhos	22	1.75	atacante	17	f	t	f	1	6
201	Kaio Jorge	23	1.75	atacante	19	f	f	f	2.1	6
202	Lautaro Díaz	26	1.8	atacante	26	f	f	t	1.4	6
203	Kenji	19	1.78	atacante	70	f	t	f	0.7	6
204	Wanderson	30	1.75	atacante	94	f	f	f	1.1	6
205	Juan Dinenno	30	1.85	atacante	99	f	f	t	1.3	6
206	Agustín Rossi	29	1.93	goleiro	1	f	f	t	2.2	7
207	Lucas Furtado	20	1.96	goleiro	24	f	t	f	0.8	7
208	Matheus Cunha	23	1.8	goleiro	25	f	t	f	1.2	7
209	Dyogo	21	1.8	goleiro	49	f	t	f	0.7	7
210	Leonardo Nannetti Lopes	17	1.78	goleiro	58	f	t	f	0.5	7
211	Gullermo Varela	32	1.73	zagueiro	2	f	f	t	1.4	7
212	Léo Ortiz	29	1.85	zagueiro	3	f	f	f	1.9	7
213	Léo Pereira	29	1.88	zagueiro	4	f	f	f	2.1	7
214	Ayrton Lucas	27	1.8	zagueiro	6	f	f	f	2.3	7
215	Danilo	33	1.83	zagueiro	13	f	f	f	1	7
216	Matías Viña	27	1.75	zagueiro	17	f	f	t	1.6	7
217	Alex Sandro	34	1.8	zagueiro	26	f	f	f	1.1	7
218	Cleiton	22	1.8	zagueiro	33	f	t	f	0.9	7
219	Da Mata	19	1.85	zagueiro	41	f	t	f	0.7	7
220	Wesley França	21	1.78	zagueiro	43	f	t	f	1.3	7
221	João Victor Schlickmann Carbone	20	1.85	zagueiro	44	f	t	f	0.8	7
222	Daniel Sales	18	1.78	zagueiro	51	f	t	f	0.7	7
223	Iago Teodoro Da Silva Nogueira	20	1.88	zagueiro	57	f	t	f	0.7	7
224	João Cunha	18	1.88	zagueiro	61	f	t	f	0.7	7
225	Gusttavo	19	1.75	zagueiro	74	f	t	f	0.6	7
226	Erick Pulgar	31	1.88	meio_campo	5	f	f	t	2.4	7
227	Gerson	27	1.88	meio_campo	8	t	f	f	3.5	7
228	Giorgian de Arrascaeta	30	1.73	meio_campo	10	t	f	t	3.2	7
229	Nicolás de la Cruz	27	1.68	meio_campo	18	f	f	t	2.8	7
230	Lorran	18	1.78	meio_campo	19	f	t	f	1	7
231	Allan	28	1.75	meio_campo	29	f	f	f	1.4	7
232	Michael Delgado	29	1.65	meio_campo	30	f	f	f	1.3	7
233	Rayan	20	1.83	meio_campo	35	f	t	f	1.2	7
234	Gonzalo Plata	24	1.78	meio_campo	50	f	f	t	2	7
235	Evertton	22	1.73	meio_campo	52	f	t	f	0.9	7
236	Pablo Lucio	18	1.88	meio_campo	56	f	t	f	0.8	7
237	João Alves	20	1.78	meio_campo	60	f	t	f	0.9	7
238	Wallace Yan	20	1.78	meio_campo	64	f	t	f	0.9	7
239	Lucas Santos	18	1.78	meio_campo	72	f	t	f	0.8	7
240	Luiz Felipe Mariano Dos Santos	17	1.78	meio_campo	75	f	t	f	0.8	7
241	Caio Joshua Lana De Andrade	17	1.8	meio_campo	79	f	t	f	0.8	7
242	Jheferson Medino	16	1.78	meio_campo	82	f	t	f	0.7	7
243	Luiz Araújo	28	1.75	atacante	7	f	f	f	2.1	7
244	Pedro	27	1.85	atacante	9	t	f	f	3.2	7
245	Everton	29	1.75	atacante	11	t	f	f	2.5	7
246	Matheus Gonçalves	19	1.78	atacante	20	f	t	f	1.3	7
247	Juninho	28	1.78	atacante	23	f	f	f	1	7
248	Bruno Henrique	34	1.83	atacante	27	f	f	f	2	7
249	Felipe Teresa	19	1.83	atacante	40	f	t	f	0.9	7
250	Guilherme Gomes	19	1.8	atacante	47	f	t	f	0.9	7
251	Shola Ogundana	20	1.73	atacante	54	f	t	t	1.1	7
252	Jorge Mora	18	1.68	atacante	68	f	t	t	0.9	7
253	Felipe Lima	19	1.8	atacante	78	f	t	f	0.8	7
254	João Camargo	18	1.85	atacante	80	f	t	f	0.9	7
255	Douglas Telles	17	1.78	atacante	81	f	t	f	0.7	7
256	Fábio	44	1.88	goleiro	1	f	f	f	1	8
257	Marcelo Pitaluga	22	1.93	goleiro	27	f	t	f	0.6	8
258	Gustavo Ramalho Bremer Pinto	22	2.01	goleiro	50	f	t	f	0.5	8
259	Vitor Eudes	26	1.93	goleiro	98	f	f	f	0.7	8
260	Samuel Xavier	34	1.68	zagueiro	2	f	f	f	1	8
261	Thiago Silva	40	1.83	zagueiro	3	t	f	f	1.4	8
262	Ignácio	28	1.93	zagueiro	4	f	f	f	1.1	8
263	René	32	1.75	zagueiro	6	f	f	f	1	8
264	Gabriel Fuentes	28	1.8	zagueiro	12	f	f	t	1.3	8
265	Juan Freytes	25	1.85	zagueiro	22	f	f	t	1.2	8
266	Guga	26	1.73	zagueiro	23	f	f	f	1	8
267	Manoel	35	1.8	zagueiro	26	f	f	f	0.9	8
268	Facundo Bernal	21	1.88	meio_campo	5	f	t	t	1.1	8
269	Renato Augusto	37	1.85	meio_campo	7	t	f	f	1.5	8
270	Martinelli	23	1.78	meio_campo	8	f	f	f	1.7	8
271	Ganso	35	1.83	meio_campo	10	f	f	f	1.3	8
272	Nonato	27	1.75	meio_campo	16	f	f	f	1.1	8
273	Rubén Lezcano	21	1.78	meio_campo	18	f	t	t	1	8
274	Jhon Arias	27	1.7	meio_campo	21	t	f	t	2.3	8
275	Thiago Santos	35	1.8	meio_campo	29	f	f	f	1	8
276	Hércules	24	1.78	meio_campo	35	f	f	f	1	8
277	Lima	28	1.73	meio_campo	45	f	f	f	1.3	8
278	Everaldo	33	1.8	atacante	9	f	f	f	1.1	8
279	Keno	35	1.78	atacante	11	f	f	f	1	8
280	Germán Cano	37	1.78	atacante	14	t	f	t	2.4	8
281	Agustín Canobbio	26	1.75	atacante	17	f	f	t	1.8	8
282	Joaquín Lavega	20	1.75	atacante	25	f	t	t	1.1	8
283	Paulo Baya	25	1.83	atacante	77	f	f	f	0.9	8
284	Kevin Serna	27	1.8	atacante	90	f	f	t	1	8
285	João Ricardo	36	1.85	goleiro	1	f	f	f	1.1	9
286	Brenno	26	1.91	goleiro	12	f	f	f	0.8	9
287	Magrão	24	1.98	goleiro	15	f	f	f	0.7	9
288	César	19	1.93	goleiro	51	f	t	f	0.6	9
289	Tinga	31	1.78	zagueiro	2	f	f	f	1.3	9
290	Titi	37	1.85	zagueiro	4	f	f	f	1	9
291	Bruno Pacheco	33	1.75	zagueiro	6	f	f	f	1.1	9
292	Benjamín Kuscevic	29	1.85	zagueiro	13	f	f	t	1.5	9
293	Eros Mancuso	26	1.7	zagueiro	14	f	f	t	1.2	9
294	Diogo Barbosa	32	1.78	zagueiro	16	f	f	f	1	9
295	David Luiz	38	1.88	zagueiro	23	t	f	f	1.1	9
296	Gastón Ávila	23	1.83	zagueiro	32	f	t	t	1.3	9
297	Emanuel Britez	33	1.78	zagueiro	33	f	f	t	1.2	9
298	Felipe Jonatan	27	1.73	zagueiro	36	f	f	f	1.4	9
299	Guillermo Fernández	33	1.8	meio_campo	5	f	f	t	1.5	9
300	Tomás Pochettino	29	1.78	meio_campo	7	f	f	t	1.3	9
301	Emmanuel Martínez	30	1.7	meio_campo	8	f	f	t	1.4	9
302	Calebe	25	1.73	meio_campo	10	f	f	f	1.2	9
303	José Welison	30	1.78	meio_campo	17	f	f	f	1.3	9
304	Matheus Rossetto	28	1.8	meio_campo	20	f	f	f	1	9
305	Yago Pikachu	32	1.7	meio_campo	22	f	f	f	1.5	9
306	Lucas Sasha	35	1.78	meio_campo	88	f	f	f	1.1	9
307	Juan Martín Lucero	33	1.78	atacante	9	f	f	t	1.5	9
308	Marinho	34	1.68	atacante	11	f	f	f	1.2	9
309	Deyverson	33	1.88	atacante	18	f	f	f	1.5	9
310	Allanzinho	25	1.75	atacante	19	f	f	f	1	9
311	Moisés	28	1.78	atacante	21	f	f	f	1.3	9
312	Kervin Andrade	20	1.68	atacante	77	f	t	t	1.1	9
313	Tiago Volpi	34	1.91	goleiro	1	f	f	f	1.2	10
314	Gabriel Chapecó	25	1.8	goleiro	12	f	f	f	0.9	10
315	Wagner Leonardo	25	1.85	zagueiro	3	f	f	f	1.3	10
316	Wálter Kannemann	34	1.85	zagueiro	4	f	f	t	1.4	10
317	Rodrigo Ely	31	1.88	zagueiro	5	f	f	f	1	10
318	João Pedro	28	1.78	zagueiro	18	f	f	f	1.1	10
319	Jemerson	32	1.83	zagueiro	21	f	f	f	1.3	10
320	Lucas Esteves	24	1.7	zagueiro	25	f	f	f	1	10
321	Gustavo Cuéllar	32	1.78	meio_campo	6	f	f	t	1.4	10
322	Edenilson	35	1.75	meio_campo	8	t	f	f	1.5	10
323	Francis Amuzu	25	1.7	meio_campo	9	f	f	t	1.2	10
324	Franco Cristaldo	28	1.7	meio_campo	10	f	f	t	1.3	10
325	Miguel Monsalve	21	1.78	meio_campo	11	f	t	t	1.1	10
326	Nathan	29	1.8	meio_campo	14	f	f	f	1.1	10
327	Camilo	26	1.78	meio_campo	15	f	f	f	1	10
328	Dodi	29	1.7	meio_campo	17	f	f	f	1.1	10
329	Mathías Villasanti	28	1.78	meio_campo	20	f	f	t	1.4	10
330	Cristian Pavón	29	1.68	atacante	7	f	f	t	1.5	10
331	Alexander Aravena	22	1.75	atacante	16	f	t	t	1.2	10
332	Douglas Arezo	22	1.78	atacante	19	f	f	t	1.4	10
333	Martin Braithwaite	33	1.8	atacante	22	f	f	t	1.5	10
334	Alysson Edward	18	1.83	atacante	47	f	t	f	0.9	10
335	André Henrique	23	1.88	atacante	77	f	f	f	1	10
336	Cristian Olivera	23	1.75	atacante	99	f	f	t	1.3	10
337	Weverton	37	1.88	goleiro	21	t	f	f	1.6	1
338	Marcelo Lomba	38	1.88	goleiro	14	f	f	f	0.7	1
339	Mateus Oliveira	23	1.98	goleiro	1	f	t	f	0.9	1
340	Bruno Fuchs	26	1.91	zagueiro	3	f	f	f	1.2	1
341	Agustín Giay	21	1.8	zagueiro	4	f	t	t	1.3	1
342	Mayke	32	1.78	zagueiro	12	f	f	f	1.1	1
343	Micael	24	1.91	zagueiro	13	f	f	f	1.1	1
344	Gustavo Gómez	31	1.85	zagueiro	15	t	f	t	1.7	1
345	Joaquín Piquerez	26	1.83	zagueiro	22	f	f	t	1.6	1
346	Murilo	28	1.88	zagueiro	26	f	f	f	1.1	1
347	Aníbal Moreno	25	1.78	meio_campo	5	f	f	t	1.5	1
348	Felipe Anderson	32	1.75	meio_campo	7	t	f	f	1.4	1
349	Richard Ríos	24	1.85	meio_campo	8	f	f	t	1.5	1
350	Raphael Veiga	29	1.78	meio_campo	23	t	f	f	1.8	1
351	Lucas Evangelista	30	1.8	meio_campo	30	f	f	f	1.3	1
352	Emiliano Martínez	25	1.83	meio_campo	32	f	f	t	1.4	1
353	Vitor Roque	20	1.75	atacante	9	t	t	f	2	1
354	Paulinho	24	1.78	atacante	10	f	f	f	1.2	1
355	Facundo Torres	25	1.78	atacante	17	f	f	t	1.5	1
356	Estêvão	18	1.75	atacante	41	f	t	f	1.6	1
357	José López	24	1.91	atacante	42	f	f	t	1.7	1
358	Rafael	35	1.93	goleiro	23	f	f	f	1.3	12
359	Jandrei	32	1.88	goleiro	93	f	f	f	0.9	12
360	Robert Arboleda	33	1.88	zagueiro	5	t	f	t	1.4	12
361	Cédric	33	1.73	zagueiro	6	f	f	t	1.2	12
362	Enzo Díaz	29	1.75	zagueiro	13	f	f	t	1.3	12
363	Alan Franco	28	1.78	zagueiro	28	f	f	t	1.3	12
364	Nahuel Ferraresi	26	1.91	zagueiro	32	f	f	t	1.4	12
365	Sabino	28	1.83	zagueiro	35	f	f	f	1	12
366	Oscar	33	1.78	meio_campo	8	t	f	f	1.6	12
367	Rodriguinho	21	1.88	meio_campo	15	f	t	f	1.2	12
368	Luiz Gustavo	37	1.85	meio_campo	16	t	f	f	1	12
369	Marcos Antonio	24	1.65	meio_campo	20	f	f	f	1.3	12
370	Damián Bobadilla	23	1.8	meio_campo	21	f	f	t	1.1	12
371	Alisson	31	1.73	meio_campo	25	f	f	f	1.3	12
372	Matheus Alves	20	1.78	meio_campo	47	f	t	f	1	12
373	Lucas Ferreira	19	1.8	meio_campo	48	f	t	f	0.9	12
374	Jonathan Calleri	31	1.8	atacante	9	t	f	t	1.6	12
375	Luciano	31	1.83	atacante	10	f	f	f	1.4	12
376	Ferreira	27	1.75	atacante	11	f	f	f	1.3	12
377	André Silva	27	1.8	atacante	17	f	f	f	1.2	12
378	Ryan Francisco	18	1.7	atacante	49	f	t	f	1.1	12
379	Léo Jardim	30	1.88	goleiro	1	f	f	f	1.4	13
380	Daniel Fuzato	27	1.91	goleiro	13	f	f	f	1	13
381	José Luis Rodríguez	28	1.83	zagueiro	2	f	f	t	1.2	13
382	Mauricio Lemos	29	1.88	zagueiro	4	f	f	t	1.3	13
383	Lucas Piton	24	1.75	zagueiro	6	f	f	t	1.6	13
384	João Victor	26	1.88	zagueiro	38	f	f	f	1.3	13
385	Lucas Freitas	24	1.83	zagueiro	43	f	f	f	1.2	13
386	Paulo Henrique	28	1.75	zagueiro	96	f	f	f	1.1	13
387	Tchê Tchê	32	1.75	meio_campo	3	f	f	f	1.3	13
388	Jair	30	1.78	meio_campo	8	f	f	f	1.4	13
389	Dimitri Payet	38	1.75	meio_campo	10	t	f	t	1.5	13
390	Philippe Coutinho	32	1.73	meio_campo	11	t	f	f	1.5	13
391	Benjamin Garre	24	1.73	meio_campo	15	f	f	t	1.2	13
392	Nuno Moreira	25	1.75	meio_campo	17	f	f	t	1.3	13
393	Hugo Moura	27	1.83	meio_campo	25	f	f	f	1.2	13
394	Adson	24	1.68	meio_campo	28	f	f	f	1.1	13
395	Matheus Carvalho	23	1.75	meio_campo	85	f	f	f	1	13
396	Loide	25	1.85	atacante	45	f	f	t	1.1	13
397	Rayan Rocha	18	1.88	atacante	77	f	t	f	1.2	13
398	Alex Teixeira	35	1.73	atacante	90	f	f	f	1.1	13
399	Pablo Vegetti	36	1.88	atacante	99	t	f	t	1.5	13
\.


--
-- Data for Name: partidas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.partidas (id, temporada, data, horario, fase, tipo_fase, estadio_id, arbitro, publico, publico_max, gols_mandante, gols_visitante, gols_1_tempo_mandante, gols_1_tempo_visitante, prorrogacao, penalti, time_mandante_id, time_visitante_id, tecnico_mandante_id, tecnico_visitante_id) FROM stdin;
1	2025/2026	2025-05-04	16:00	Rodada 1	Fase Única	2	Arbitro 1	29894	50000	2	3	1	0	f	f	2	19	2	19
2	2025/2026	2025-05-05	16:00	Rodada 1	Fase Única	11	Arbitro 2	42992	50000	3	2	2	2	f	f	11	12	11	12
3	2025/2026	2025-05-06	16:00	Rodada 1	Fase Única	6	Arbitro 3	32216	50000	3	4	1	2	f	f	6	14	6	14
4	2025/2026	2025-05-07	16:00	Rodada 1	Fase Única	7	Arbitro 4	30124	50000	4	0	4	0	f	f	7	10	7	10
5	2025/2026	2025-05-08	16:00	Rodada 1	Fase Única	11	Arbitro 5	31572	50000	2	0	2	0	t	f	11	12	11	12
6	2025/2026	2025-05-09	16:00	Rodada 1	Fase Única	8	Arbitro 6	43580	50000	0	2	0	2	f	f	8	13	8	13
7	2025/2026	2025-05-10	16:00	Rodada 1	Fase Única	5	Arbitro 7	23039	50000	0	3	0	2	f	f	5	11	5	11
8	2025/2026	2025-05-11	16:00	Rodada 1	Fase Única	9	Arbitro 8	33065	50000	2	1	1	0	f	f	9	13	9	13
9	2025/2026	2025-05-12	16:00	Rodada 1	Fase Única	2	Arbitro 9	19107	50000	0	3	0	3	f	f	2	5	2	5
10	2025/2026	2025-05-13	16:00	Rodada 1	Fase Única	16	Arbitro 10	33220	50000	0	2	0	2	f	f	16	13	16	13
11	2025/2026	2025-05-14	16:00	Rodada 2	Fase Única	5	Arbitro 11	18032	50000	4	4	4	2	f	f	5	3	5	3
12	2025/2026	2025-05-15	16:00	Rodada 2	Fase Única	14	Arbitro 12	18184	50000	1	2	0	2	f	f	14	4	14	4
13	2025/2026	2025-05-16	16:00	Rodada 2	Fase Única	18	Arbitro 13	22703	50000	0	4	0	4	f	f	18	15	18	15
14	2025/2026	2025-05-17	16:00	Rodada 2	Fase Única	5	Arbitro 14	20691	50000	3	1	1	0	f	f	5	16	5	16
15	2025/2026	2025-05-18	16:00	Rodada 2	Fase Única	3	Arbitro 15	38386	50000	0	1	0	1	f	f	3	1	3	1
16	2025/2026	2025-05-19	16:00	Rodada 2	Fase Única	10	Arbitro 16	22988	50000	3	4	1	1	f	f	10	3	10	3
17	2025/2026	2025-05-20	16:00	Rodada 2	Fase Única	9	Arbitro 17	29834	50000	0	3	0	3	f	f	9	7	9	7
18	2025/2026	2025-05-21	16:00	Rodada 2	Fase Única	14	Arbitro 18	19421	50000	2	4	1	1	f	t	14	1	14	1
19	2025/2026	2025-05-22	16:00	Rodada 2	Fase Única	18	Arbitro 19	28685	50000	1	0	0	0	f	f	18	4	18	4
20	2025/2026	2025-05-23	16:00	Rodada 2	Fase Única	19	Arbitro 20	27235	50000	4	1	0	1	f	f	19	5	19	5
21	2025/2026	2025-05-24	16:00	Rodada 3	Fase Única	2	Arbitro 21	43249	50000	4	3	4	1	f	f	2	3	2	3
22	2025/2026	2025-05-25	16:00	Rodada 3	Fase Única	12	Arbitro 22	48752	50000	3	2	0	1	f	f	12	10	12	10
23	2025/2026	2025-05-26	16:00	Rodada 3	Fase Única	7	Arbitro 23	18681	50000	1	1	0	1	f	f	7	6	7	6
24	2025/2026	2025-05-27	16:00	Rodada 3	Fase Única	17	Arbitro 24	18534	50000	3	4	3	4	f	f	17	10	17	10
25	2025/2026	2025-05-28	16:00	Rodada 3	Fase Única	4	Arbitro 25	26103	50000	1	0	0	0	f	t	4	1	4	1
26	2025/2026	2025-05-29	16:00	Rodada 3	Fase Única	2	Arbitro 26	43991	50000	2	0	1	0	f	f	2	6	2	6
27	2025/2026	2025-05-30	16:00	Rodada 3	Fase Única	20	Arbitro 27	31235	50000	2	3	0	1	f	f	20	13	20	13
28	2025/2026	2025-05-31	16:00	Rodada 3	Fase Única	4	Arbitro 28	29957	50000	0	3	0	3	f	f	4	13	4	13
29	2025/2026	2025-06-01	16:00	Rodada 3	Fase Única	3	Arbitro 29	16745	50000	2	3	1	0	f	f	3	15	3	15
30	2025/2026	2025-06-02	16:00	Rodada 3	Fase Única	10	Arbitro 30	38933	50000	0	2	0	0	f	f	10	12	10	12
31	2025/2026	2025-06-03	16:00	Rodada 4	Fase Única	4	Arbitro 31	24600	50000	3	0	2	0	f	f	4	11	4	11
32	2025/2026	2025-06-04	16:00	Rodada 4	Fase Única	6	Arbitro 32	17094	50000	2	1	0	1	f	f	6	13	6	13
33	2025/2026	2025-06-05	16:00	Rodada 4	Fase Única	4	Arbitro 33	29460	50000	2	1	0	1	f	f	4	11	4	11
34	2025/2026	2025-06-06	16:00	Rodada 4	Fase Única	10	Arbitro 34	48129	50000	1	3	0	1	f	f	10	16	10	16
35	2025/2026	2025-06-07	16:00	Rodada 4	Fase Única	5	Arbitro 35	30906	50000	4	0	1	0	f	t	5	15	5	15
36	2025/2026	2025-06-08	16:00	Rodada 4	Fase Única	1	Arbitro 36	43037	50000	2	3	2	1	f	f	1	12	1	12
37	2025/2026	2025-06-09	16:00	Rodada 4	Fase Única	8	Arbitro 37	35163	50000	1	3	1	2	f	f	8	10	8	10
38	2025/2026	2025-06-10	16:00	Rodada 4	Fase Única	15	Arbitro 38	40058	50000	0	0	0	0	f	f	15	2	15	2
39	2025/2026	2025-06-11	16:00	Rodada 4	Fase Única	8	Arbitro 39	22991	50000	2	4	1	0	f	f	8	5	8	5
40	2025/2026	2025-06-12	16:00	Rodada 4	Fase Única	4	Arbitro 40	39584	50000	1	0	0	0	f	f	4	12	4	12
41	2025/2026	2025-06-13	16:00	Rodada 5	Fase Única	5	Arbitro 41	42090	50000	4	2	4	2	f	f	5	10	5	10
42	2025/2026	2025-06-14	16:00	Rodada 5	Fase Única	7	Arbitro 42	49535	50000	1	4	0	1	f	f	7	13	7	13
43	2025/2026	2025-06-15	16:00	Rodada 5	Fase Única	6	Arbitro 43	48065	50000	2	1	1	0	f	f	6	8	6	8
44	2025/2026	2025-06-16	16:00	Rodada 5	Fase Única	14	Arbitro 44	43593	50000	1	3	0	1	t	f	14	4	14	4
45	2025/2026	2025-06-17	16:00	Rodada 5	Fase Única	19	Arbitro 45	27519	50000	0	4	0	0	f	f	19	20	19	20
46	2025/2026	2025-06-18	16:00	Rodada 5	Fase Única	19	Arbitro 46	26373	50000	3	0	0	0	f	f	19	4	19	4
47	2025/2026	2025-06-19	16:00	Rodada 5	Fase Única	1	Arbitro 47	39526	50000	2	4	1	2	f	f	1	12	1	12
48	2025/2026	2025-06-20	16:00	Rodada 5	Fase Única	8	Arbitro 48	47875	50000	1	4	0	3	f	f	8	19	8	19
49	2025/2026	2025-06-21	16:00	Rodada 5	Fase Única	5	Arbitro 49	22040	50000	3	1	0	1	f	f	5	1	5	1
50	2025/2026	2025-06-22	16:00	Rodada 5	Fase Única	11	Arbitro 50	32749	50000	4	4	2	2	f	f	11	15	11	15
51	2025/2026	2025-06-23	16:00	Rodada 6	Fase Única	5	Arbitro 51	31359	50000	1	4	0	0	f	f	5	7	5	7
52	2025/2026	2025-06-24	16:00	Rodada 6	Fase Única	17	Arbitro 52	41317	50000	0	2	0	0	f	f	17	9	17	9
53	2025/2026	2025-06-25	16:00	Rodada 6	Fase Única	16	Arbitro 53	31559	50000	3	4	3	3	f	f	16	6	16	6
54	2025/2026	2025-06-26	16:00	Rodada 6	Fase Única	18	Arbitro 54	31349	50000	2	3	0	3	f	f	18	9	18	9
55	2025/2026	2025-06-27	16:00	Rodada 6	Fase Única	4	Arbitro 55	37663	50000	1	2	0	2	f	f	4	11	4	11
56	2025/2026	2025-06-28	16:00	Rodada 6	Fase Única	12	Arbitro 56	41952	50000	0	4	0	4	f	f	12	10	12	10
57	2025/2026	2025-06-29	16:00	Rodada 6	Fase Única	16	Arbitro 57	24661	50000	3	0	0	0	f	f	16	20	16	20
58	2025/2026	2025-06-30	16:00	Rodada 6	Fase Única	4	Arbitro 58	45883	50000	4	3	1	3	f	f	4	9	4	9
59	2025/2026	2025-07-01	16:00	Rodada 6	Fase Única	17	Arbitro 59	26403	50000	0	4	0	1	f	f	17	16	17	16
60	2025/2026	2025-07-02	16:00	Rodada 6	Fase Única	2	Arbitro 60	15051	50000	2	0	2	0	f	f	2	6	2	6
61	2025/2026	2025-07-03	16:00	Rodada 7	Fase Única	13	Arbitro 61	44132	50000	0	2	0	0	f	f	13	18	13	18
62	2025/2026	2025-07-04	16:00	Rodada 7	Fase Única	1	Arbitro 62	31044	50000	3	3	2	1	f	f	1	10	1	10
63	2025/2026	2025-07-05	16:00	Rodada 7	Fase Única	5	Arbitro 63	41226	50000	1	0	0	0	f	f	5	12	5	12
64	2025/2026	2025-07-06	16:00	Rodada 7	Fase Única	2	Arbitro 64	26233	50000	4	3	4	1	f	f	2	14	2	14
65	2025/2026	2025-07-07	16:00	Rodada 7	Fase Única	7	Arbitro 65	18206	50000	2	3	2	3	f	f	7	19	7	19
66	2025/2026	2025-07-08	16:00	Rodada 7	Fase Única	15	Arbitro 66	19783	50000	1	3	0	2	f	f	15	20	15	20
67	2025/2026	2025-07-09	16:00	Rodada 7	Fase Única	4	Arbitro 67	19780	50000	2	4	2	1	f	f	4	15	4	15
68	2025/2026	2025-07-10	16:00	Rodada 7	Fase Única	20	Arbitro 68	46918	50000	4	4	1	4	f	f	20	2	20	2
69	2025/2026	2025-07-11	16:00	Rodada 7	Fase Única	4	Arbitro 69	18061	50000	2	1	2	0	f	f	4	18	4	18
70	2025/2026	2025-07-12	16:00	Rodada 7	Fase Única	3	Arbitro 70	45403	50000	0	2	0	0	f	f	3	14	3	14
71	2025/2026	2025-07-13	16:00	Rodada 8	Fase Única	1	Arbitro 71	44301	50000	0	3	0	1	f	f	1	14	1	14
72	2025/2026	2025-07-14	16:00	Rodada 8	Fase Única	8	Arbitro 72	48610	50000	1	4	0	1	f	f	8	3	8	3
73	2025/2026	2025-07-15	16:00	Rodada 8	Fase Única	1	Arbitro 73	22533	50000	1	4	1	2	f	f	1	9	1	9
74	2025/2026	2025-07-16	16:00	Rodada 8	Fase Única	3	Arbitro 74	36015	50000	4	2	4	0	f	f	3	4	3	4
75	2025/2026	2025-07-17	16:00	Rodada 8	Fase Única	16	Arbitro 75	35218	50000	0	4	0	1	f	f	16	5	16	5
76	2025/2026	2025-07-18	16:00	Rodada 8	Fase Única	17	Arbitro 76	40498	50000	0	2	0	0	f	f	17	9	17	9
77	2025/2026	2025-07-19	16:00	Rodada 8	Fase Única	5	Arbitro 77	27790	50000	4	2	4	0	f	f	5	3	5	3
78	2025/2026	2025-07-20	16:00	Rodada 8	Fase Única	19	Arbitro 78	49234	50000	1	0	0	0	f	f	19	13	19	13
79	2025/2026	2025-07-21	16:00	Rodada 8	Fase Única	7	Arbitro 79	41010	50000	0	3	0	1	f	f	7	5	7	5
80	2025/2026	2025-07-22	16:00	Rodada 8	Fase Única	4	Arbitro 80	29003	50000	2	4	0	1	f	f	4	2	4	2
81	2025/2026	2025-07-23	16:00	Rodada 9	Fase Única	14	Arbitro 81	23784	50000	4	0	3	0	f	f	14	6	14	6
82	2025/2026	2025-07-24	16:00	Rodada 9	Fase Única	12	Arbitro 82	34274	50000	0	1	0	1	f	t	12	11	12	11
83	2025/2026	2025-07-25	16:00	Rodada 9	Fase Única	2	Arbitro 83	22044	50000	3	4	1	2	f	f	2	4	2	4
84	2025/2026	2025-07-26	16:00	Rodada 9	Fase Única	20	Arbitro 84	16617	50000	0	3	0	2	f	f	20	16	20	16
85	2025/2026	2025-07-27	16:00	Rodada 9	Fase Única	18	Arbitro 85	26785	50000	2	3	0	2	f	f	18	16	18	16
86	2025/2026	2025-07-28	16:00	Rodada 9	Fase Única	19	Arbitro 86	15633	50000	0	3	0	0	f	f	19	10	19	10
87	2025/2026	2025-07-29	16:00	Rodada 9	Fase Única	3	Arbitro 87	36322	50000	1	1	1	0	f	f	3	17	3	17
88	2025/2026	2025-07-30	16:00	Rodada 9	Fase Única	5	Arbitro 88	15346	50000	4	3	0	2	f	f	5	2	5	2
89	2025/2026	2025-07-31	16:00	Rodada 9	Fase Única	10	Arbitro 89	17164	50000	2	4	2	4	f	f	10	17	10	17
90	2025/2026	2025-08-01	16:00	Rodada 9	Fase Única	5	Arbitro 90	37634	50000	2	3	1	2	f	f	5	15	5	15
91	2025/2026	2025-08-02	16:00	Rodada 10	Fase Única	2	Arbitro 91	19089	50000	4	0	0	0	f	f	2	1	2	1
92	2025/2026	2025-08-03	16:00	Rodada 10	Fase Única	2	Arbitro 92	44834	50000	4	0	4	0	f	f	2	6	2	6
93	2025/2026	2025-08-04	16:00	Rodada 10	Fase Única	20	Arbitro 93	31552	50000	2	2	0	1	f	f	20	9	20	9
94	2025/2026	2025-08-05	16:00	Rodada 10	Fase Única	19	Arbitro 94	20931	50000	4	1	3	1	f	f	19	1	19	1
95	2025/2026	2025-08-06	16:00	Rodada 10	Fase Única	11	Arbitro 95	40829	50000	4	2	4	1	f	f	11	16	11	16
96	2025/2026	2025-08-07	16:00	Rodada 10	Fase Única	9	Arbitro 96	46086	50000	3	4	1	0	f	f	9	12	9	12
97	2025/2026	2025-08-08	16:00	Rodada 10	Fase Única	1	Arbitro 97	31103	50000	0	0	0	0	f	f	1	8	1	8
98	2025/2026	2025-08-09	16:00	Rodada 10	Fase Única	12	Arbitro 98	31006	50000	2	3	2	3	f	f	12	9	12	9
99	2025/2026	2025-08-10	16:00	Rodada 10	Fase Única	7	Arbitro 99	20499	50000	0	2	0	1	f	f	7	19	7	19
100	2025/2026	2025-08-11	16:00	Rodada 10	Fase Única	11	Arbitro 100	25385	50000	1	4	0	0	f	f	11	6	11	6
\.


--
-- Data for Name: tecnicos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tecnicos (id, nome, idade, data_inicio, data_fim, nacionalidade, tempo_carreira) FROM stdin;
1	Cuca	60	2024-01-01	\N	Brasil	\N
2	Rogério Ceni	51	2023-01-01	\N	Brasil	\N
3	Renato Paiva	54	2025-01-01	\N	Portugal	\N
4	Léo Condé	46	2024-01-01	\N	Brasil	\N
5	Dorival Júnior	62	2025-01-01	\N	Brasil	\N
6	Leonardo Jardim	49	2025-01-01	\N	Portugal	\N
7	Filipe Luís	39	2024-01-01	\N	Brasil	\N
8	Renato Gaúcho	61	2025-01-01	\N	Brasil	\N
9	Pablo Vojvoda	49	2021-01-01	\N	Argentina	\N
10	Fábio Matias	44	2024-01-01	\N	Brasil	\N
11	Mano Menezes	62	2025-01-01	\N	Brasil	\N
12	Roger Machado	49	2024-01-01	\N	Brasil	\N
13	Rafael Guanaes	41	2025-01-01	\N	Brasil	\N
14	Abel Ferreira	45	2020-11-01	\N	Portugal	\N
15	Fernando Seabra	44	2024-01-01	\N	Brasil	\N
16	César Sampaio	56	2025-01-01	\N	Brasil	\N
17	Luis Zubeldia	43	2024-01-01	\N	Argentina	\N
18	Pepa	43	2024-01-01	\N	Portugal	\N
19	Felipe Loureiro	46	2025-01-01	\N	Brasil	\N
20	Thiago Carpini	39	2024-01-01	\N	Brasil	\N
\.


--
-- Data for Name: times; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.times (id, nome, socios, valor_equipe_titular, valor_medio_equipe_titular) FROM stdin;
1	Atlético Mineiro	82000	93.7	3.23
2	Bahia	81000	92	3.17
3	Botafogo	70000	135.95	4
4	Ceará	55000	30	0.83
5	Corinthians	90000	123.25	3.85
6	Cruzeiro	86000	86.55	3.09
7	Flamengo	95000	219.15	7.07
8	Fluminense	85000	73.6	2.1
9	Fortaleza	73000	47.85	1.5
10	Grêmio	85000	98.1	2.89
11	Internacional	88000	106.55	2.6
12	Juventude	52000	17.38	0.47
13	Mirassol	50000	18.23	0.51
14	Palmeiras	80000	238.75	7.7
15	Red Bull Bragantino	76000	70.1	2.34
16	Santos	87000	96.1	2.83
17	Sport Recife	58000	36.65	1.15
18	São Paulo	96000	80.65	2.24
19	Vasco da Gama	79000	85.8	2.68
20	Vitória	60000	39.95	1.05
\.


--
-- Data for Name: times_temporada; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.times_temporada (id, data_inicio, data_final, temporada, time_id) FROM stdin;
1	2022-01-01	2022-12-31	2022-2023	1
2	2023-01-01	2023-12-31	2023-2024	1
3	2023-01-01	2023-12-31	2023-2024	2
4	2024-01-01	2024-12-31	2024-2025	2
5	2025-01-01	2025-12-31	2025-2026	2
6	2022-01-01	2022-12-31	2022-2023	3
7	2023-01-01	2023-12-31	2023-2024	3
8	2024-01-01	2024-12-31	2024-2025	3
9	2025-01-01	2025-12-31	2025-2026	3
10	2022-01-01	2022-12-31	2022-2023	4
11	2023-01-01	2023-12-31	2023-2024	4
12	2024-01-01	2024-12-31	2024-2025	4
13	2025-01-01	2025-12-31	2025-2026	4
14	2023-01-01	2023-12-31	2023-2024	5
15	2024-01-01	2024-12-31	2024-2025	5
16	2022-01-01	2022-12-31	2022-2023	6
17	2023-01-01	2023-12-31	2023-2024	6
18	2024-01-01	2024-12-31	2024-2025	6
19	2025-01-01	2025-12-31	2025-2026	6
20	2022-01-01	2022-12-31	2022-2023	7
21	2025-01-01	2025-12-31	2025-2026	7
22	2022-01-01	2022-12-31	2022-2023	8
23	2023-01-01	2023-12-31	2023-2024	8
24	2024-01-01	2024-12-31	2024-2025	8
25	2025-01-01	2025-12-31	2025-2026	8
26	2022-01-01	2022-12-31	2022-2023	9
27	2025-01-01	2025-12-31	2025-2026	9
28	2023-01-01	2023-12-31	2023-2024	10
29	2024-01-01	2024-12-31	2024-2025	10
30	2022-01-01	2022-12-31	2022-2023	11
31	2025-01-01	2025-12-31	2025-2026	11
32	2023-01-01	2023-12-31	2023-2024	12
33	2025-01-01	2025-12-31	2025-2026	12
34	2022-01-01	2022-12-31	2022-2023	13
35	2023-01-01	2023-12-31	2023-2024	13
36	2022-01-01	2022-12-31	2022-2023	14
37	2023-01-01	2023-12-31	2023-2024	14
38	2024-01-01	2024-12-31	2024-2025	14
39	2025-01-01	2025-12-31	2025-2026	14
40	2023-01-01	2023-12-31	2023-2024	15
41	2025-01-01	2025-12-31	2025-2026	15
42	2022-01-01	2022-12-31	2022-2023	16
43	2023-01-01	2023-12-31	2023-2024	16
44	2024-01-01	2024-12-31	2024-2025	16
45	2025-01-01	2025-12-31	2025-2026	16
46	2022-01-01	2022-12-31	2022-2023	17
47	2023-01-01	2023-12-31	2023-2024	17
48	2024-01-01	2024-12-31	2024-2025	17
49	2025-01-01	2025-12-31	2025-2026	17
50	2022-01-01	2022-12-31	2022-2023	18
51	2023-01-01	2023-12-31	2023-2024	18
52	2024-01-01	2024-12-31	2024-2025	18
53	2025-01-01	2025-12-31	2025-2026	18
54	2022-01-01	2022-12-31	2022-2023	19
55	2023-01-01	2023-12-31	2023-2024	19
56	2024-01-01	2024-12-31	2024-2025	19
57	2025-01-01	2025-12-31	2025-2026	19
58	2023-01-01	2023-12-31	2023-2024	20
59	2024-01-01	2024-12-31	2024-2025	20
60	2025-01-01	2025-12-31	2025-2026	20
\.


--
-- Name: escalacoes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.escalacoes_id_seq', 1, true);


--
-- Name: estadios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estadios_id_seq', 2, true);


--
-- Name: estatisticas_time_partida_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estatisticas_time_partida_id_seq', 1, true);


--
-- Name: eventos_partida_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.eventos_partida_id_seq', 1, true);


--
-- Name: historico_jogadores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historico_jogadores_id_seq', 1, true);


--
-- Name: historico_tecnicos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historico_tecnicos_id_seq', 1, true);


--
-- Name: jogadores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jogadores_id_seq', 4, true);


--
-- Name: partidas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.partidas_id_seq', 4, true);


--
-- Name: tecnicos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tecnicos_id_seq', 3, true);


--
-- Name: times_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.times_id_seq', 11, true);


--
-- Name: times_temporada_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.times_temporada_id_seq', 1, true);


--
-- Name: escalacoes escalacoes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.escalacoes
    ADD CONSTRAINT escalacoes_pkey PRIMARY KEY (id);


--
-- Name: estadios estadios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estadios
    ADD CONSTRAINT estadios_pkey PRIMARY KEY (id);


--
-- Name: estatisticas_time_partida estatisticas_time_partida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estatisticas_time_partida
    ADD CONSTRAINT estatisticas_time_partida_pkey PRIMARY KEY (id);


--
-- Name: eventos_partida eventos_partida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos_partida
    ADD CONSTRAINT eventos_partida_pkey PRIMARY KEY (id);


--
-- Name: historico_jogadores historico_jogadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_jogadores
    ADD CONSTRAINT historico_jogadores_pkey PRIMARY KEY (id);


--
-- Name: historico_tecnicos historico_tecnicos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_tecnicos
    ADD CONSTRAINT historico_tecnicos_pkey PRIMARY KEY (id);


--
-- Name: jogadores jogadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jogadores
    ADD CONSTRAINT jogadores_pkey PRIMARY KEY (id);


--
-- Name: partidas partidas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partidas
    ADD CONSTRAINT partidas_pkey PRIMARY KEY (id);


--
-- Name: tecnicos tecnicos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tecnicos
    ADD CONSTRAINT tecnicos_pkey PRIMARY KEY (id);


--
-- Name: times times_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.times
    ADD CONSTRAINT times_nome_key UNIQUE (nome);


--
-- Name: times times_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.times
    ADD CONSTRAINT times_pkey PRIMARY KEY (id);


--
-- Name: times_temporada times_temporada_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.times_temporada
    ADD CONSTRAINT times_temporada_pkey PRIMARY KEY (id);


--
-- Name: estatisticas_time_partida uq_stat_partida_time; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estatisticas_time_partida
    ADD CONSTRAINT uq_stat_partida_time UNIQUE (partida_id, time_id);


--
-- Name: historico_tecnicos uq_tecnico_time_data; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_tecnicos
    ADD CONSTRAINT uq_tecnico_time_data UNIQUE (tecnico_id, time_id, data_inicio);


--
-- Name: escalacoes escalacoes_jogador_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.escalacoes
    ADD CONSTRAINT escalacoes_jogador_id_fkey FOREIGN KEY (jogador_id) REFERENCES public.jogadores(id);


--
-- Name: escalacoes escalacoes_partida_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.escalacoes
    ADD CONSTRAINT escalacoes_partida_id_fkey FOREIGN KEY (partida_id) REFERENCES public.partidas(id);


--
-- Name: estatisticas_time_partida estatisticas_time_partida_partida_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estatisticas_time_partida
    ADD CONSTRAINT estatisticas_time_partida_partida_id_fkey FOREIGN KEY (partida_id) REFERENCES public.partidas(id);


--
-- Name: estatisticas_time_partida estatisticas_time_partida_time_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estatisticas_time_partida
    ADD CONSTRAINT estatisticas_time_partida_time_id_fkey FOREIGN KEY (time_id) REFERENCES public.times(id);


--
-- Name: eventos_partida eventos_partida_jogador_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos_partida
    ADD CONSTRAINT eventos_partida_jogador_id_fkey FOREIGN KEY (jogador_id) REFERENCES public.jogadores(id);


--
-- Name: eventos_partida eventos_partida_partida_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos_partida
    ADD CONSTRAINT eventos_partida_partida_id_fkey FOREIGN KEY (partida_id) REFERENCES public.partidas(id);


--
-- Name: historico_jogadores historico_jogadores_jogador_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_jogadores
    ADD CONSTRAINT historico_jogadores_jogador_id_fkey FOREIGN KEY (jogador_id) REFERENCES public.jogadores(id);


--
-- Name: historico_jogadores historico_jogadores_time_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_jogadores
    ADD CONSTRAINT historico_jogadores_time_id_fkey FOREIGN KEY (time_id) REFERENCES public.times(id);


--
-- Name: historico_tecnicos historico_tecnicos_tecnico_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_tecnicos
    ADD CONSTRAINT historico_tecnicos_tecnico_id_fkey FOREIGN KEY (tecnico_id) REFERENCES public.tecnicos(id);


--
-- Name: historico_tecnicos historico_tecnicos_time_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_tecnicos
    ADD CONSTRAINT historico_tecnicos_time_id_fkey FOREIGN KEY (time_id) REFERENCES public.times(id);


--
-- Name: jogadores jogadores_time_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jogadores
    ADD CONSTRAINT jogadores_time_id_fkey FOREIGN KEY (time_id) REFERENCES public.times(id);


--
-- Name: partidas partidas_estadio_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partidas
    ADD CONSTRAINT partidas_estadio_id_fkey FOREIGN KEY (estadio_id) REFERENCES public.estadios(id);


--
-- Name: partidas partidas_tecnico_mandante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partidas
    ADD CONSTRAINT partidas_tecnico_mandante_id_fkey FOREIGN KEY (tecnico_mandante_id) REFERENCES public.tecnicos(id);


--
-- Name: partidas partidas_tecnico_visitante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partidas
    ADD CONSTRAINT partidas_tecnico_visitante_id_fkey FOREIGN KEY (tecnico_visitante_id) REFERENCES public.tecnicos(id);


--
-- Name: partidas partidas_time_mandante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partidas
    ADD CONSTRAINT partidas_time_mandante_id_fkey FOREIGN KEY (time_mandante_id) REFERENCES public.times(id);


--
-- Name: partidas partidas_time_visitante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partidas
    ADD CONSTRAINT partidas_time_visitante_id_fkey FOREIGN KEY (time_visitante_id) REFERENCES public.times(id);


--
-- Name: times_temporada times_temporada_time_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.times_temporada
    ADD CONSTRAINT times_temporada_time_id_fkey FOREIGN KEY (time_id) REFERENCES public.times(id);


--
-- PostgreSQL database dump complete
--

