### 🔎 Plano de Estudos Detalhado: SRE e Observabilidade

Este plano está dividido em módulos progressivos, indo da fundação teórica até a automação avançada e visão de liderança.

#### Módulo 1: Fundamentos e Cultura SRE
- [ ] Ler a Parte II e III do *SRE Book* do Google (SLIs, SLOs, SLAs e Error Budgets).
- [ ] Mapear as jornadas críticas do usuário nos sistemas atuais.
- [ ] Definir SLIs (Service Level Indicators) fáceis de medir para pelo menos um serviço crítico.
- [ ] Estabelecer SLOs (Service Level Objectives) alinhados com a expectativa do negócio.
- [ ] Configurar uma política de Error Budget (o que acontece quando o orçamento de erros acaba?).

#### Módulo 2: Observabilidade na Prática (Datadog & FullStory)
- [ ] **Métricas:** Criar dashboards no Datadog focados nos "Quatro Sinais de Ouro" (Latência, Tráfego, Erros e Saturação).
- [ ] **Traces e Logs:** Instrumentar aplicações para garantir rastreabilidade de ponta a ponta (APM).
- [ ] **Frontend/UX:** Utilizar o FullStory para correlacionar erros de backend com a experiência real do usuário na ponta.
- [ ] **Alertas Inteligentes:** Configurar alertas baseados em *Burn Rate* (taxa de queima do Error Budget) no Datadog para evitar fadiga de alertas.

#### Módulo 3: Automação e Resposta a Incidentes (Integrações e IA)
- [ ] Estruturar o fluxo de *Incident Management* e integração de alertas críticos com o ServiceNow.
- [ ] Escrever *Runbooks* e *Playbooks* claros para os principais cenários de falha.
- [ ] Conduzir pelo menos um *Post-Mortem* *Blameless* (sem culpa) com o time após um incidente real.
- [ ] Explorar o Model Context Protocol (MCP) para integrar dados de observabilidade ao GitHub Copilot, acelerando o *troubleshooting* de código.

#### Módulo 4: Visão de Liderança e Escalabilidade
- [ ] Definir como reportar as métricas de confiabilidade (SLOs) para a diretoria/stakeholders de forma executiva.
- [ ] Criar um modelo de *Capacity Planning* para a infraestrutura em Cloud.
- [ ] Promover um workshop interno para o time de desenvolvimento sobre como criar código focado em confiabilidade.
