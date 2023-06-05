# ![Awakener's Orb](https://web.poecdn.com/image/Art/2DItems/Currency/TransferOrb.png) Awakened PoE Trade

[![](https://user-images.githubusercontent.com/4292308/153364874-dde23599-278c-4350-8d86-dadbc4b978b3.svg)](https://somsubhra.github.io/github-release-stats/?username=SnosMe&repository=awakened-poe-trade)
[![](https://user-images.githubusercontent.com/4292308/153364769-e4fe1e82-1bbc-46ac-8a3c-f5a98a5667cc.svg)](https://patreon.com/awakened_poe_trade)
[![](https://user-images.githubusercontent.com/4292308/153364565-7a545d26-e617-4a33-a919-ff90d8feda3d.svg)](https://github.com/SnosMe/awakened-poe-trade/issues/22)


➡ [Download for Windows & Linux](https://snosme.github.io/awakened-poe-trade/download) ⬅

## Tool showcase

| Gem | Rare | Unique | Currency |
|-----|------|--------|----------|
| ![](https://i.imgur.com/LTsH2DZ.png) | ![](https://i.imgur.com/2XL5Wl8.png) | ![](https://i.imgur.com/UTV6prE.png) | ![](https://i.imgur.com/dQ9Sns6.png) |

### Development

Follow instructions similar to CI [.github/workflows/main.yml](https://github.com/SnosMe/awakened-poe-trade/blob/master/.github/workflows/main.yml)

### Acknowledgments

- [libuiohook](https://github.com/kwhat/libuiohook)
- [RePoE](https://github.com/brather1ng/RePoE)
- [poeprices.info](https://www.poeprices.info/)
- [poe.ninja](https://poe.ninja/)

![](https://i.imgur.com/MATqhv7.png)

***

# 修正内容
- 日本語で動作するよう修正
  - items.ndjson を追加
  - stats.ndjson を追加
  - app_i18n.json を追加
  - client_strings.js を追加

# 懸念点
- 進捗率50%
- テスト未実施
- stats.ndjson の作り込みが甘い
  - オリジナルファイルにあった項目（fromHeistAreaMods とか dp とか）を完全無視してる
    - ツールからトレード検索する時に使えない検索項目や挙動が怪しい検索項目があると思う

# TODO
- stats.ndjson の解析
  - content.ggpk の解析
    - descriptions.txt以外に翻訳に使えるファイルないか確認
- 日本語表記でレイアウトが崩れている個所の修正
- tsファイル内で言語依存の処理してないか確認
