import { KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarResults, KBarSearch, useMatches } from "kbar";

export function CommandBar() {
  const actions = [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'writing words',
      perform: () => window.location.pathname = ''
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['a'],
      keywords: 'writing words',
      perform: () => window.location.pathname = 'about'
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['p'],
      keywords: 'writing words',
      perform: () => window.location.pathname = 'projects'
    },
  ]

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator>
              <KBarSearch />
              <RenderResult />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
      </KBarProvider>
    </>
  )
}

function RenderResult() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string'
          ? <div>{item}</div>
          : (
            <div style={{ background: active ? "#eee" : "transparent" }}>
              {item.name}
            </div>
          )
      }
    />
  )
}

RenderResult.displayName = 'RenderResult'
