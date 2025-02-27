// @ts-check
/** @type{import('../../../src/assets/data/interfaces').TranslationDict} */
export default {
  RARITY_NORMAL: 'ノーマル',
  RARITY_MAGIC: 'マジック',
  RARITY_RARE: 'レア',
  RARITY_UNIQUE: 'ユニーク',
  RARITY_GEM: 'ジェム',
  RARITY_CURRENCY: 'カレンシー',
  RARITY_DIVCARD: '占いカード',
  RARITY_QUEST: 'クエスト',
  MAP_TIER: 'マップティア: ',
  RARITY: 'レアリティ: ',
  ITEM_CLASS: 'アイテムクラス: ',
  ITEM_LEVEL: 'アイテムレベル: ',
  TALISMAN_TIER: 'タリスマンティア: ',
  GEM_LEVEL: 'レベル: ',
  STACK_SIZE: 'スタック数: ',
  SOCKETS: 'ソケット: ',
  QUALITY: '品質: ',
  PHYSICAL_DAMAGE: '物理ダメージ: ',
  ELEMENTAL_DAMAGE: '元素ダメージ: ',
  CRIT_CHANCE: 'クリティカル率: ',
  ATTACK_SPEED: '秒間アタック回数: ',
  ARMOUR: 'アーマー: ',
  EVASION: '回避力: ',
  ENERGY_SHIELD: 'エナジーシールド: ',
  TAG_WARD: 'ウォード: ',
  BLOCK_CHANCE: 'ブロック率: ',
  CORRUPTED: 'コラプト',
  UNIDENTIFIED: '未鑑定',
  ITEM_SUPERIOR: /^上質な (.*)$/,
  MAP_BLIGHTED: /^ブライトに覆われた (.*)$/,
  MAP_BLIGHT_RAVAGED: /^ブライトに破壊された (.*)$/,
  INFLUENCE_SHAPER: 'シェイパーアイテム',
  INFLUENCE_ELDER: 'エルダーアイテム',
  INFLUENCE_CRUSADER: 'クルセイダーアイテム',
  INFLUENCE_HUNTER: 'ハンターアイテム',
  INFLUENCE_REDEEMER: '救世主アイテム',
  INFLUENCE_WARLORD: 'ウォーロードアイテム',
  SECTION_SYNTHESISED: 'シンセサイズ',
  ITEM_SYNTHESISED: /^シンセサイズされた (.*)$/,
  VEILED_PREFIX: 'ヴェールされたプレフィックス',
  VEILED_SUFFIX: 'ヴェールされたサフィックス',
  FLASK_CHARGES: /^フラスコ \d+ チャージ$/,
  METAMORPH_HELP: 'ターネの研究所で4つのサンプルを合成する。',
  BEAST_HELP: '右クリックで怪獣図鑑に追加する。',
  VOIDSTONE_HELP: 'これをアトラスにはめて、すべてのマップのティアを上げる。',
  METAMORPH_BRAIN: /^.* 脳$/,
  METAMORPH_EYE: /^.* 眼$/,
  METAMORPH_LUNG: /^.* 肺$/,
  METAMORPH_HEART: /^.* 心臓$/,
  METAMORPH_LIVER: /^.* 肝臓$/,
  CANNOT_USE_ITEM: 'このアイテムを使用できません。アイテムの効果は無視されます',
  QUALITY_ANOMALOUS: /^異常な (.*)$/,
  QUALITY_DIVERGENT: /^相違の (.*)$/,
  QUALITY_PHANTASMAL: /^幻想の (.*)$/,
  AREA_LEVEL: 'エリアレベル: ',
  HEIST_WINGS_REVEALED: '情報を聞いた区画: ',
  HEIST_TARGET: 'ハイスト目標：',
  HEIST_BLUEPRINT_ENCHANTS: 'エンチャントされた武具',
  HEIST_BLUEPRINT_TRINKETS: '盗賊のトリンケットまたはカレンシー',
  HEIST_BLUEPRINT_GEMS: '異常なジェム',
  HEIST_BLUEPRINT_REPLICAS: 'レプリカまたはエクスペリメントアイテム',
  MIRRORED: 'ミラー化',
  MODIFIER_LINE: /^(?<type>[^"]+)(?:\s+"(?<name>[^"]+)")?(?:\s*\(ティア：(?<tier>\d+)\))?(?:\s*\(ランク：(?<rank>\d+)\))?$/,
  PREFIX_MODIFIER: 'プレフィックス',
  SUFFIX_MODIFIER: 'サフィックス',
  CRAFTED_PREFIX: 'マスターがクラフトしたプレフィックスモッド',
  CRAFTED_SUFFIX: 'マスターがクラフトしたサフィックスモッド',
  UNSCALABLE_VALUE: ' — 変更不可値',
  CORRUPTED_IMPLICIT: 'コラプト暗黙モッド',
  MODIFIER_INCREASED: /^(.+?)% 増加する$/,
  INCURSION_OPEN: '開放された部屋：',
  INCURSION_OBSTRUCTED: '塞がれた部屋：',
  EATER_IMPLICIT: /^世界を喰らう者 暗黙モッド 「(?<rank>.+)」$/,
  EXARCH_IMPLICIT: /^灼熱の代行者 暗黙モッド 「(?<rank>.+)」$/,
  ELDRITCH_MOD_R1: '低',
  ELDRITCH_MOD_R2: '大',
  ELDRITCH_MOD_R3: '特大',
  ELDRITCH_MOD_R4: '希少',
  ELDRITCH_MOD_R5: '絶妙',
  ELDRITCH_MOD_R6: '完璧',
  SENTINEL_CHARGE: 'チャージ: ',
  SHAPER_MODS: ['シェイパーの'],
  ELDER_MODS: ['エルダーの'],
  CRUSADER_MODS: ['クルセイダーの'],
  HUNTER_MODS: ['ハンターの'],
  REDEEMER_MODS: ['救世主の'],
  WARLORD_MODS: ['ウォーロードの'],
  DELVE_MODS: ['デルヴの'],
  VEILED_MODS: ['ヴェールされた'],
  INCURSION_MODS: ['グアテリッツィの', 'ゾペックの', 'トポタンテの', 'タカティの', 'マタトルの', 'シタクアロトル', 'プフアーテの'],
  FOIL_UNIQUE: 'フォイルユニーク',
  UNMODIFIABLE: '変更不可',
  // ---
  CHAT_SYSTEM: /^: (?<body>.+)$/,
  CHAT_TRADE: /^\$(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_GLOBAL: /^#(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_PARTY: /^%(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_GUILD: /^&(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_WHISPER_TO: /^@宛先 (?<char_name>.+?): (?<body>.+)$/,
  CHAT_WHISPER_FROM: /^@差出人 (?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_WEBTRADE_GEM: /^レベル (?<gem_lvl>\d+) (?<gem_qual>\d+)% (?<gem_name>.+)$/
}
