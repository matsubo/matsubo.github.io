# Generate llms.txt from Translation Files

このワークフローは、日本語翻訳ファイルからYuki Matsukuraのプロフィール情報を抽出し、llms.txtファイルを生成します。

## 目的
トップページの内容が更新された際に、最新の情報でllms.txtを再生成する。

## 実行手順

1. **翻訳ファイルの読み込み**
   - `src/messages/locales/ja/translation.json` を読み込む
   - 必要に応じて英語版も参照: `src/messages/locales/en/translation.json`

2. **情報抽出**
   以下のセクションから情報を抽出:
   - `hero`: 名前、役職、基本説明
   - `about`: 自己紹介、経歴概要
   - `personality`: MBTI、強み、リーダーシップスタイル
   - `academic`: 研究論文、プレゼンテーション
   - `experience`: 職務経歴（Minedia、Metaps、GREE）
   - `skills`: 技術スキル一覧
   - `hobbies`: 趣味、資格、トライアスロン実績
   - `projects`: 主要プロジェクト、AI Tools、API Services、過去のプロジェクト

3. **llms.txt生成**
   以下の構造でファイルを生成:
   
   ```
   # Yuki Matsukura (松倉 友樹)
   
   ## Overview
   - 基本プロフィール
   
   ## Current Position
   - 現職情報
   
   ## Education
   - 学歴
   
   ## Professional Experience
   - 職務経歴（時系列順）
   
   ## Technical Skills
   - スキルレベル別に分類
   
   ## Personality & Work Style
   - MBTI、強み
   
   ## Research & Publications
   - 論文、登壇、執筆
   
   ## Hobbies & Personal Interests
   - トライアスロン、資格
   
   ## Notable Projects
   - AI Tools、API Services、過去のプロジェクト
   
   ## Contact & Social Media
   - SNS、ブログ、連絡先
   
   ## Philosophy
   - 座右の銘
   ```

4. **ファイル保存**
   - `public` ディレクトリに `llms.txt` として保存

## 注意事項
- 翻訳ファイルの構造が変更された場合、このワークフローも更新が必要
- 技術スキルのレベル（パーセンテージ）は `skills.mainSkills` 配列から取得
- プロジェクト情報は詳細な説明も含めること
- 連絡先情報はREADME.mdとも整合性を保つこと

## 実行タイミング
- トップページの内容を更新した後
- 新しいプロジェクトや実績を追加した後
- 職務経歴や技術スキルを更新した後
