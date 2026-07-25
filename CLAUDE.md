# 이 블로그에 대해

AIFFEL(모두의연구소)에서 AI/바이브코딩/업무자동화를 학습하며, 배운 내용과 직접 만든 프로젝트, 시행착오를 기록하는 개발일지입니다. 블로그 운영 자체가 학습 과제 중 하나입니다.

- Jekyll + GitHub Pages (remote_theme: minimal-mistakes)
- 배포 주소: https://elfinnani-byte.github.io/blog/
- 저장소 폴더(`G:\내 드라이브\blog`)를 Obsidian 볼트로 사용

## 폴더 구조 (콘텐츠 워크플로우)

- `garden/` — 비공개 메모. Obsidian에서 자유롭게 위키링크로 작성. **gitignore 대상**이라 GitHub에 절대 올라가지 않고, `_config.yml`의 `exclude`에도 있어 Jekyll 빌드에도 포함되지 않음.
- `_posts/` — 실제 발행되는 글. `YYYY-MM-DD-제목.md` 형식.

## 카테고리 (3개 고정)

글은 아래 3개 카테고리 중 하나로 분류하고, 카테고리마다 글의 구조/톤을 다르게 가져간다.

| 카테고리   | 구조                       | 톤                                      |SKILL                    |
| ------ | ------------------------ | -------------------------------------- |-----------------------|
| `개념정리` | 용어 → 정의 → 예시 → 헷갈렸던 부분   | 간결, 설명체                                |                    |
| `프로젝트` | 목표 → 시도 → 막힌 점 → 해결 → 결과 | 담백한 서술체                                |                    |
| `회고`   | 상황 → 삽질 과정 → 깨달은 점       | 대화체, 담담하게  | dev-insight-post                    |

## 발행 워크플로우

사용자가 "이 메모 발행해줘" 같은 요청을 하면:

1. `garden/` 안의 해당 메모를 읽는다.
2. 위 카테고리 표에 맞춰 제목/카테고리/태그와 본문 구조를 제안한다.
3. `_posts/YYYY-MM-DD-제목.md`로 파일을 작성한다 (front matter: title, categories, tags, date, description(200자 이내 요약)).
   - **이미지 1개 이상 포함** (없으면 내용에 맞는 다이어그램/일러스트를 만들어서 넣는다. "포스트에 그림 넣기" 절차 참고)
   - **강조할 부분은 bold(`**`) 또는 인용(`>`)으로 표시**해서 핵심이 눈에 띄게 한다.
4. **바로 push하지 않고, 사용자에게 내용을 보여주고 확인을 받는다.**
5. 사용자가 승인하면 그때 `git add` → `git commit` → `git push` 한다. (GitHub Pages가 push 후 자동으로 사이트에 반영)

메모를 발행 후에도 `garden/`에 남겨둘지 삭제할지는 매번 사용자에게 확인한다.

## 여러 세션 동시 작업 시 주의

이 저장소는 여러 Claude Code 세션(예: 블로그 디자인 작업 세션과 이 발행 파이프라인 세션)이 **같은 로컬 폴더·같은 `main` 브랜치를 동시에 공유**하는 경우가 있다. worktree로 분리하지 않는 한, git 커밋 시 다음을 지킨다:

- `git add -A` / `git add .` 금지 — 항상 관련 파일만 경로를 콕 집어서 스테이징한다.
- 커밋 전 `git status`로 낯선(내가 만들지 않은) 변경사항이 섞여 있는지 확인하고, 애매하면 커밋하지 말고 사용자에게 먼저 물어본다.
- push 전 `git fetch`로 다른 세션이 이미 push했는지 확인한다 (ahead/behind 상태 체크).

## 포스트에 그림 넣기

글 내용을 설명하는 간단한 다이어그램/일러스트가 필요하면:

1. `mcp__visualize__show_widget`으로 먼저 대화창에 미리보기를 그려서 사용자에게 스타일을 확인받는다 (이때는 Claude 전용 CSS 변수 사용 가능).
2. 확정되면 **같은 그림을 색상값을 하드코딩한 순수 SVG로 다시 만들어** `assets/images/파일명.svg`에 저장한다. (Claude 전용 CSS 변수는 실제 블로그 페이지에는 존재하지 않아 렌더링되지 않음)
3. 포스트 본문에는 `relative_url` 필터로 참조한다 (baseurl이 `/blog`이므로):

   ```markdown
   ![설명]({{ "/assets/images/파일명.svg" | relative_url }})
   ```

외부 서비스(GitHub user-attachments 등)에 업로드하는 방식은 쓰지 않는다 — 저장소 안에 파일로 직접 저장해서 외부 의존성을 없앤다.

이미지 정렬(가운데 정렬, 본문 너비 70%)은 `_sass/_custom-overrides.scss`의 `.page__content-inner img` 규칙으로 전역 적용되므로, 포스트에서는 그냥 일반 마크다운 이미지 문법만 쓰면 된다 (별도 스타일 태그 불필요).

## 정보 박스(callout) 넣기

팁·주의·참고 등을 강조하고 싶으면 Minimal Mistakes 테마에 내장된 `.notice--*` 클래스를 쓴다 (별도 CSS 불필요).

여러 문단(제목+본문)이 들어갈 때:

```markdown
<div class="notice--info" markdown="1">
**ⓘ 제목**

본문 내용. **bold** 같은 마크다운도 여기 그대로 쓸 수 있음.
</div>
```

한 문단짜리 짧은 박스일 때:

```markdown
**ⓘ 제목** — 한 줄 내용.
{: .notice--info}
```

`markdown="1"`을 빠뜨리면 안의 마크다운 문법이 처리되지 않으니 항상 포함한다. 색상은 `.notice`(회색) / `.notice--primary`(강조색) / `.notice--info`(파랑) / `.notice--warning`(노랑) / `.notice--success`(초록) / `.notice--danger`(빨강) 중 내용 성격에 맞게 고른다.
