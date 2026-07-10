# blog

입학사정관으로서 바이브코딩(AI와 함께하는 개발)을 통해 업무용 시스템을 만들어가는 과정을 기록하는 개발일지입니다.

- 테마: [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) (remote_theme 방식이라 별도 설치 없이 GitHub Pages가 자동으로 빌드합니다)
- 배포 주소: https://elfinnani-byte.github.io/blog/

## 새 글 쓰는 방법

1. `_posts/` 폴더에 `YYYY-MM-DD-제목.md` 형식으로 파일을 만듭니다.
   예: `_posts/2026-07-15-노션-자동화.md`
2. 파일 맨 위에 아래처럼 front matter를 작성합니다.

   ```yaml
   ---
   title: "글 제목"
   categories:
     - 일지
   tags:
     - 태그1
     - 태그2
   ---
   ```

3. 그 아래에 마크다운으로 본문을 씁니다.
4. 커밋 후 `main` 브랜치에 push하면 몇 분 내로 사이트에 자동 반영됩니다.

## 고정 페이지 수정

- 소개 페이지: `_pages/about.md`
- 사이트 상단 메뉴: `_data/navigation.yml`
- 전체 설정(제목, 설명, 테마 스킨 등): `_config.yml`

## GitHub Pages 배포 설정 (최초 1회)

1. GitHub 저장소 페이지 → **Settings** → **Pages**로 이동합니다.
2. **Build and deployment** → **Source**를 `Deploy from a branch`로 선택합니다.
3. Branch를 `main`, 폴더를 `/ (root)`로 선택하고 저장합니다.
4. 몇 분 후 `https://elfinnani-byte.github.io/blog/`에서 확인할 수 있습니다.

## 로컬에서 미리보기 (선택 사항)

Ruby가 설치되어 있다면 아래 명령으로 로컬에서 실행해볼 수 있습니다. (필수는 아니며, GitHub가 자동으로 빌드해주므로 없어도 됩니다.)

```bash
bundle install
bundle exec jekyll serve
```
