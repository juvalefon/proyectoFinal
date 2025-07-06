--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18
-- Dumped by pg_dump version 14.18

-- Started on 2025-07-06 14:59:14

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
-- TOC entry 2 (class 3079 OID 23391)
-- Name: postgis; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;


--
-- TOC entry 4245 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION postgis; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis IS 'PostGIS geometry and geography spatial types and functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 24478)
-- Name: dato; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dato (
    id integer NOT NULL,
    nombre character varying(200) NOT NULL,
    fecha date NOT NULL,
    descripcion character varying(200) NOT NULL,
    localizacion public.geometry NOT NULL
);


ALTER TABLE public.dato OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 24477)
-- Name: dato_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dato_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dato_id_seq OWNER TO postgres;

--
-- TOC entry 4246 (class 0 OID 0)
-- Dependencies: 215
-- Name: dato_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dato_id_seq OWNED BY public.dato.id;


--
-- TOC entry 4089 (class 2604 OID 24481)
-- Name: dato id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dato ALTER COLUMN id SET DEFAULT nextval('public.dato_id_seq'::regclass);


--
-- TOC entry 4239 (class 0 OID 24478)
-- Dependencies: 216
-- Data for Name: dato; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dato (id, nombre, fecha, descripcion, localizacion) FROM stdin;
\.


--
-- TOC entry 4087 (class 0 OID 23712)
-- Dependencies: 211
-- Data for Name: spatial_ref_sys; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.spatial_ref_sys (srid, auth_name, auth_srid, srtext, proj4text) FROM stdin;
\.


--
-- TOC entry 4247 (class 0 OID 0)
-- Dependencies: 215
-- Name: dato_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dato_id_seq', 1, false);


--
-- TOC entry 4093 (class 2606 OID 24485)
-- Name: dato dato_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dato
    ADD CONSTRAINT dato_pkey PRIMARY KEY (id);


-- Completed on 2025-07-06 14:59:14

--
-- PostgreSQL database dump complete
--

