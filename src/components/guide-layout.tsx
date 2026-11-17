export function GuideContents({
  label,
  links
}: {
  label: string;
  links: ReadonlyArray<readonly [id: string, label: string]>;
}) {
  return (
    <nav className="contents-panel guide-contents" aria-label={label}>
      <p className="eyebrow">{label}</p>
      <ul>
        {links.map(([id, title]) => (
          <li key={id}>
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function GuideSteps({
  steps
}: {
  steps: ReadonlyArray<{ title: string; steps: string[] }>;
}) {
  return (
    <ol className="guide-steps" role="list">
      {steps.map((step, index) => (
        <li key={step.title}>
          <span className="guide-step-number" aria-hidden="true">{index + 1}</span>
          <div className="min-w-0">
            <h3>{step.title}</h3>
            {step.steps.map((instruction) => <p key={instruction}>{instruction}</p>)}
          </div>
        </li>
      ))}
    </ol>
  );
}
