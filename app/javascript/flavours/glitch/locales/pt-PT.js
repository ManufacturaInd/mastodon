import inherited from 'mastodon/locales/pt-PT.json';

const messages = {
  'getting_started.open_source_notice': 'O Glitchsoc é uma fork do {Mastodon} e é software livre. Podes contribuir ou apontar problemas em {github}.',
  'layout.auto': 'Automático',
  'layout.current_is': 'O teu layout actual é:',
  'layout.desktop': 'Desktop',
  'layout.mobile': 'Mobile',
  'navigation_bar.app_settings': 'Configurações',
  'getting_started.onboarding': 'Mostra-me o que há por aqui',
  'onboarding.page_one.federation': 'A Ciberlândia é uma \'instância\' do Mastodon. O Mastodon é uma rede de servidores autónomos que se juntam para formar uma grande rede social. A esses servidores chamamos instâncias.',
  'onboarding.page_one.welcome': 'Damos-te as boas vindas à Ciberlândia!',
  'onboarding.page_six.github': 'A Ciberlândia baseia-se no Glitchsoc. O Glitchsoc é uma fork amigável do {Mastodon}, e é compatível com qualquer aplicação ou instância Mastodon. O Glitchsoc é totalmente livre e open source. Podes apontar bugs, sugerir funcionalidades ou contribuir para o código em {github}.',
  'settings.auto_collapse': 'Colapsar automaticamente',
  'settings.auto_collapse_all': 'Tudo',
  'settings.auto_collapse_lengthy': 'Publicações compridas',
  'settings.auto_collapse_media': 'Publicações com media',
  'settings.auto_collapse_notifications': 'Notificações',
  'settings.auto_collapse_reblogs': 'Re-publicações',
  'settings.auto_collapse_replies': 'Respostas',
  'settings.show_action_bar': 'Mostrar os botões das acções em toots colapsados',
  'settings.close': 'Fechar',
  'settings.collapsed_statuses': 'Toots colapsados',
  'settings.enable_collapsed': 'Activar toots colapsados',
  'settings.general': 'Geral',
  'settings.image_backgrounds': 'Fundos de imagem',
  'settings.image_backgrounds_media': 'Previsualizar media de toots colapsados',
  'settings.image_backgrounds_users': 'Colocar um fundo de imagem em toots colapsados',
  'settings.media': 'Media',
  'settings.media_letterbox': 'Letterbox media',
  'settings.media_fullwidth': 'Full-width media previews',
  'settings.preferences': 'Preferências pessoais',
  'settings.wide_view': 'Vista alargada (apenas em desktop)',
  'settings.navbar_under': 'Navegação em baixo (apenas em mobile)',
  'status.collapse': 'Colapsar',
  'status.uncollapse': 'Expandir',

  'media_gallery.sensitive': 'Sensível',

  'favourite_modal.combo': 'Podes carregar em {combo} para saltar este passo da próxima',

  'home.column_settings.show_direct': 'Mostrar mensagens',

  'notification.markForDeletion': 'Marcar para apagar',
  'notifications.clear': 'Limpar todas as notificações',
  'notifications.marked_clear_confirmation': 'Queres mesmo apagar permanentemente as notificações seleccionadas?',
  'notifications.marked_clear': 'Limpar notificações seleccionadas',

  'notification_purge.btn_all': 'Seleccionar\ntudo',
  'notification_purge.btn_none': 'Não \nseleccionar nada',
  'notification_purge.btn_invert': 'Inverter\nselecção',
  'notification_purge.btn_apply': 'Apagar\nseleccionadas',

  'compose.attach.upload': 'Anexa um ficheiro',
  'compose.attach.doodle': 'Desenha algo',
  'compose.attach': 'Anexar...',

  'advanced_options.local-only.short': 'Só localmente',
  'advanced_options.local-only.long': 'Não publicar para outras instâncias',
  'advanced_options.local-only.tooltip': 'Publicado apenas nesta instância',
  'advanced_options.icon_title': 'Opções avançadas',
  'advanced_options.threaded_mode.short': 'Modo de fazer fios (threads)',
  'advanced_options.threaded_mode.long': 'Abre automaticamente uma resposta depois de postar',
  'advanced_options.threaded_mode.tooltip': 'Modo de fazer fios activado',
};

export default Object.assign({}, inherited, messages);
