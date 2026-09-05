import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Code,
  CheckCircle,
  BookOpen,
  Layers,
  Terminal,
  Play,
  Sparkles,
  Zap,
  RefreshCw,
  Check,
} from "lucide-react";
import CodeBlock from "../components/CodeBlock";
import WebMobileScreenPreview from "../components/WebMobileScreenPreview";

// Determine whether an item represents visual UI/markup needing a web/mobile screen frame
const isVisualUIItem = (stack, item) => {
  if (!stack || !item) return false;

  // 1. All HTML elements render on web and mobile screens
  if (stack.id === "html") return true;

  // 2. All CSS layout and styling rules affect visual screens
  if (stack.id === "css") return true;

  // 3. React UI components and state hooks
  if (stack.id === "react") return true;

  // 4. Next.js UI route components
  if (stack.id === "nextjs") {
    const name = (item.name || "").toLowerCase();
    return (
      name.includes("page") ||
      name.includes("layout") ||
      name.includes("image") ||
      name.includes("link") ||
      name.includes("loading") ||
      name.includes("error") ||
      name.includes("not-found") ||
      name.includes("client")
    );
  }

  // 5. JavaScript DOM and interactive events
  if (stack.id === "js") {
    const name = (item.name || "").toLowerCase();
    return (
      name.includes("addeventlistener") ||
      name.includes("localstorage") ||
      name.includes("sessionstorage") ||
      name.includes("timeout") ||
      name.includes("interval") ||
      name.includes("fetch")
    );
  }

  // Non-UI items (Docker, Kubernetes, AWS, PostgreSQL, Go, Gin, GORM, Node.js, NestJS, Java, Spring Boot, TypeScript)
  // use the Developer Terminal & Runtime Console instead of a web/mobile phone screen frame
  return false;
};

// Determine exact language highlighting for the code example
const getExampleLanguage = (stackId, item, ex) => {
  if (ex && ex.language) return ex.language;
  switch (stackId) {
    case "html":
      return "html";
    case "css":
      return "css";
    case "js":
      return "javascript";
    case "typescript":
      return "typescript";
    case "react":
      return "jsx";
    case "react-native":
      return "jsx";
    case "nextjs":
      return "typescript";
    case "nodejs":
      return "javascript";
    case "nestjs":
      return "typescript";
    case "java":
    case "springboot":
      return "java";
    case "golang":
    case "gin":
    case "gorm":
      return "go";
    case "postgresql":
      return "sql";
    case "docker":
      return item?.id?.includes("dockerfile") ? "dockerfile" : "bash";
    case "kubernetes":
      return item?.id?.includes("kubectl") ? "bash" : "yaml";
    case "aws":
      return ex?.code?.trim().startsWith("aws ") ||
        ex?.code?.trim().startsWith("#")
        ? "bash"
        : "typescript";
    default:
      return "javascript";
  }
};

// Determine appropriate syntax badge in top header pill
const getItemSyntaxBadge = (stack, item) => {
  if (item?.syntax) return item.syntax;
  if (
    item?.methods?.[0]?.signature &&
    !item.methods[0].signature.includes("void | any")
  ) {
    return item.methods[0].signature;
  }
  if (stack?.id === "html") {
    return `${item.name} ... </${item.name.replace(/<|>/g, "")}>`;
  }
  if (stack?.id === "css") {
    return `.selector { ${item.name}: value; }`;
  }
  if (stack?.id === "docker") {
    return item.name.startsWith("docker")
      ? `${item.name} [OPTIONS]`
      : `${item.name}`;
  }
  if (stack?.id === "kubernetes") {
    return item.name.startsWith("kubectl")
      ? `${item.name} [FLAGS]`
      : `kind: ${item.name}`;
  }
  if (stack?.id === "postgresql") {
    return `${item.name} ... ;`;
  }
  return `// ${stack?.name || "API"}: ${item?.name || ""}`;
};

export default function TechStackItemDetailPage({
  item,
  stack,
  onBackToStack,
  onBackToMaster,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [item]);

  // Simulator state
  const [isRunning, setIsRunning] = useState(false);
  const [simulatorOutput, setSimulatorOutput] = useState("");
  const [simCounter, setSimCounter] = useState(1);

  if (!item || !stack) return null;

  const runSimulation = () => {
    setIsRunning(true);
    setSimulatorOutput("Executing runtime simulation...");
    setTimeout(() => {
      setIsRunning(false);
      setSimCounter((prev) => prev + 1);

      // Tailor simulation output based on item or technology
      if (
        item.category === "Semantic" ||
        item.category === "Forms" ||
        item.category === "Interactive"
      ) {
        setSimulatorOutput(
          `[DOM Engine] Rendered <${item.name.replace(/<|>/g, "").split(",")[0].trim()}> successfully.\n✓ Accessibility tree built (Role: landmark, WCAG AAA compliant).\n✓ Layout shift: 0.00 CLS | Paint time: 1.2ms.`,
        );
      } else if (
        item.category === "Layout" ||
        item.category === "Responsive" ||
        item.category === "Styling & Motion"
      ) {
        setSimulatorOutput(
          `[CSS Layout Engine] Computed styles for ${item.name}:\n✓ Display box model initialized.\n✓ GPU compositor layer created (60 fps frame budget maintained).\n✓ Reflow cost: 0.14ms.`,
        );
      } else if (
        item.category === "Asynchronous" ||
        item.category === "Runtime Architecture"
      ) {
        setSimulatorOutput(
          `[V8 Engine] Microtask resolved in ${Math.floor(Math.random() * 8 + 4)}ms.\n✓ Call stack emptied -> Microtask queue flushed -> Event loop tick complete.`,
        );
      } else if (
        item.category === "Type System" ||
        item.category === "Type Transformations"
      ) {
        setSimulatorOutput(
          `[TypeScript Compiler] Type check passed for ${item.name}.\n✓ Zero type errors found across definitions.\n✓ Emission: Target ES2024 with zero runtime overhead.`,
        );
      } else if (
        item.category === "Hooks & State" ||
        item.category === "Lifecycle & Sync" ||
        item.category === "Global State"
      ) {
        setSimulatorOutput(
          `[React Fiber] Re-rendered component with updated state (Render #${simCounter}).\n✓ Reconciliation diff: 1 node updated.\n✓ Commit phase duration: 0.38ms.`,
        );
      } else if (
        item.category === "Architecture" ||
        item.category === "Data Mutation"
      ) {
        setSimulatorOutput(
          `[Next.js Server] Executed Server Component / Action.\n✓ revalidatePath() cache purged.\n✓ Server-timing: 24.1ms.`,
        );
      } else if (stack.id === "docker") {
        setSimulatorOutput(
          `$ ${item.methods?.[0]?.name || "docker run"} --rm test-instance\n✓ Container started: sha256:4a8b9c20f\n✓ Health check: healthy (0 restart)\n✓ Process isolated in user namespace.`,
        );
      } else if (stack.id === "kubernetes") {
        setSimulatorOutput(
          `$ kubectl apply -f spec.yaml\n${item.name.toLowerCase()} configured.\n✓ Status: 3/3 Pods Ready | 0 Restarts\n✓ Target endpoints updated in kube-dns.`,
        );
      } else if (stack.id === "aws") {
        setSimulatorOutput(
          `$ aws ${item.name.toLowerCase().replace(/[^a-z0-9]/g, "-")} status\n{\n  "Status": "ACTIVE",\n  "Latency": "18.4ms",\n  "Region": "us-east-1",\n  "ExecutionId": "exec-${Math.floor(Math.random() * 90000 + 10000)}"\n}`,
        );
      } else if (stack.id === "postgresql") {
        setSimulatorOutput(
          `EXPLAIN (ANALYZE, BUFFERS) Query Plan:\n-> Index Scan on table (cost=0.15..8.24 rows=1 width=64)\n   Buffers: shared hit=4\nExecution Time: 0.052 ms (Hot Cache Hit)`,
        );
      } else {
        setSimulatorOutput(
          `✓ ${item.name} executed successfully in ${stack.name} runtime.\n✓ Status: 200 OK | Latency: 1.2ms\n✓ Memory impact: Minimal (Safe heap allocation).`,
        );
      }
    }, 450);
  };

  return (
    <div className="detail-page-wrapper" style={{ paddingBottom: "80px" }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-apple">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBackToMaster && onBackToMaster();
            }}
          >
            My DocuStack
          </a>
          <span>/</span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBackToStack && onBackToStack();
            }}
          >
            {stack.name}
          </a>
          <span>/</span>
          <span style={{ color: "var(--color-corona-muted)" }}>
            {item.category}
          </span>
          <span>/</span>
          <span
            style={{
              color: stack.accentColor || "var(--color-corona-blue)",
              fontWeight: "600",
            }}
          >
            {item.name}
          </span>
        </div>

        {/* Item Header Card */}
        <div
          className="detail-header-apple"
          style={{
            borderTop: `3px solid ${stack.accentColor || "var(--color-corona-green)"}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <span
                className="comp-num-badge"
                style={{
                  borderColor: stack.accentColor
                    ? `${stack.accentColor}66`
                    : undefined,
                  color: stack.accentColor || "#ffffff",
                }}
              >
                {item.num}
              </span>
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#ffffff",
                }}
              >
                {item.name}
              </h1>
              <span
                className="filter-chip"
                style={{
                  background: "var(--color-corona-surface-hover)",
                  cursor: "default",
                  color: stack.accentColor || "var(--color-corona-muted)",
                  fontWeight: "600",
                }}
              >
                {item.category}
              </span>
              <span
                className="filter-chip"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  cursor: "default",
                  color: "#ffffff",
                }}
              >
                {stack.name} {stack.version}
              </span>
            </div>

            <button
              className="corona-green-btn"
              onClick={onBackToStack}
              style={{
                padding: "8px 16px",
                fontSize: "13px",
                backgroundColor:
                  stack.accentColor || "var(--color-corona-green)",
              }}
            >
              <ArrowLeft size={14} />
              <span>Back to {stack.name} Library</span>
            </button>
          </div>

          <p
            style={{
              fontSize: "18px",
              color: "var(--color-corona-muted)",
              fontWeight: "400",
              lineHeight: "1.5",
            }}
          >
            {item.tagline}
          </p>

          <div className="import-pill-apple">
            <code>{getItemSyntaxBadge(stack, item)}</code>
          </div>
        </div>

        {/* Main Content Sections Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* 1. Description & Architecture */}
          <div className="block-card-apple" style={{ margin: 0 }}>
            <h3
              className="block-title-apple"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <BookOpen
                size={20}
                style={{
                  color: stack.accentColor || "var(--color-corona-blue)",
                }}
              />
              <span>Description & Architecture</span>
            </h3>
            <p
              style={{
                color: "#ffffff",
                fontSize: "15px",
                lineHeight: "1.7",
                whiteSpace: "pre-line",
              }}
            >
              {item.description}
            </p>
          </div>

          {/* 2. Interactive Demo & Simulator Box */}
          {item.demo && (
            <div
              className="block-card-apple"
              style={{
                margin: 0,
                backgroundColor: "var(--color-corona-surface)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <h3
                  className="block-title-apple"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    margin: 0,
                  }}
                >
                  <Zap
                    size={20}
                    style={{
                      color: stack.accentColor || "var(--color-corona-green)",
                    }}
                  />
                  <span>
                    {isVisualUIItem(stack, item)
                      ? "Interactive Web & Mobile Live Sandbox"
                      : "Runtime Simulation & Execution Console"}
                  </span>
                </h3>

                <button
                  onClick={runSimulation}
                  disabled={isRunning}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor:
                      stack.accentColor || "var(--color-corona-green)",
                    color: "#000000",
                    border: "none",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    fontWeight: "700",
                    fontSize: "12.5px",
                    cursor: isRunning ? "wait" : "pointer",
                    opacity: isRunning ? 0.7 : 1,
                  }}
                >
                  {isRunning ? (
                    <RefreshCw size={13} className="spin-animate" />
                  ) : (
                    <Play size={13} />
                  )}
                  <span>{isRunning ? "Executing..." : "Run Simulation"}</span>
                </button>
              </div>

              {/* A. If Visual UI Item: Render Desktop Web Browser & Mobile Phone Screen */}
              {isVisualUIItem(stack, item) && (
                <div style={{ marginBottom: "16px" }}>
                  <WebMobileScreenPreview item={item} stack={stack} />
                </div>
              )}

              {/* B. Terminal / Engine Console */}
              <div
                style={{
                  backgroundColor: "#0a0c10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "6px",
                  padding: "12px 16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  lineHeight: "1.6",
                  color: "#00d25b",
                  whiteSpace: "pre-wrap",
                }}
              >
                <div
                  style={{
                    color: "var(--color-corona-muted)",
                    fontSize: "11px",
                    marginBottom: "4px",
                  }}
                >
                  ${" "}
                  {stack.id === "docker"
                    ? "docker daemon --status"
                    : stack.id === "kubernetes"
                      ? "kubectl cluster-info"
                      : stack.id === "postgresql"
                        ? "psql -U postgres -d enterprise"
                        : "runtime-console --inspect"}
                </div>
                {simulatorOutput ||
                  `> Ready to execute ${item.name} in ${stack.name} runtime. Click "Run Simulation" above to test.`}
              </div>
            </div>
          )}

          {/* 3. When to Use & Guidelines */}
          {item.useCases && item.useCases.length > 0 && (
            <div className="block-card-apple" style={{ margin: 0 }}>
              <h3
                className="block-title-apple"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircle
                  size={20}
                  style={{ color: "var(--color-corona-green)" }}
                />
                <span>When to Use & Guidelines</span>
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  margin: 0,
                  padding: 0,
                }}
              >
                {item.useCases.map((useCase, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "10px",
                      fontSize: "15px",
                      color: "#ffffff",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--color-corona-green)",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 4. Key Props / Parameters Reference Table */}
          {item.props && item.props.length > 0 && (
            <div className="block-card-apple" style={{ margin: 0 }}>
              <h3
                className="block-title-apple"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Layers
                  size={20}
                  style={{ color: "var(--color-corona-purple)" }}
                />
                <span>
                  {stack.id === "html"
                    ? "Key HTML Attributes & Accessibility Options"
                    : stack.id === "css"
                      ? "Supported Values & Property Specifications"
                      : stack.id === "docker" || stack.id === "kubernetes"
                        ? "Command Flags, Options & Schema Fields"
                        : stack.id === "postgresql"
                          ? "SQL Clauses, Options & Keywords"
                          : "Key Props & Parameters Reference"}
                </span>
              </h3>
              <div style={{ overflowX: "auto" }}>
                <table className="props-table">
                  <thead>
                    <tr>
                      <th>
                        {stack.id === "html"
                          ? "Attribute"
                          : stack.id === "css"
                            ? "Property / Keyword"
                            : stack.id === "docker" || stack.id === "kubernetes"
                              ? "Flag / Field"
                              : stack.id === "postgresql"
                                ? "Clause / Param"
                                : "Prop / Parameter"}
                      </th>
                      <th>Type / Accepted Values</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.props.map((prop, idx) => (
                      <tr key={idx}>
                        <td
                          className="prop-name"
                          style={{
                            color:
                              stack.accentColor || "var(--color-corona-blue)",
                          }}
                        >
                          {prop.name}
                        </td>
                        <td className="prop-type">{prop.type}</td>
                        <td
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "12.5px",
                            color: "#ffffff",
                          }}
                        >
                          {prop.default}
                        </td>
                        <td style={{ color: "var(--color-corona-muted)" }}>
                          {prop.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 5. Key Methods & Functions Table */}
          {item.methods && item.methods.length > 0 && (
            <div className="block-card-apple" style={{ margin: 0 }}>
              <h3
                className="block-title-apple"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Terminal
                  size={20}
                  style={{ color: "var(--color-corona-green)" }}
                />
                <span>
                  {stack.id === "html"
                    ? "DOM Interface Methods & API Events"
                    : stack.id === "css"
                      ? "CSS Syntax & Rule Formats"
                      : stack.id === "docker" || stack.id === "kubernetes"
                        ? "CLI Commands & Syntax Reference"
                        : stack.id === "postgresql"
                          ? "Execution Commands & Statements"
                          : "Key Methods & Function Signatures"}
                </span>
              </h3>
              <div style={{ overflowX: "auto" }}>
                <table className="props-table">
                  <thead>
                    <tr>
                      <th>
                        {stack.id === "docker" || stack.id === "kubernetes"
                          ? "Command"
                          : stack.id === "postgresql"
                            ? "Statement"
                            : stack.id === "html"
                              ? "DOM Method"
                              : stack.id === "css"
                                ? "Rule / Function"
                                : "Method / Function"}
                      </th>
                      <th>Signature / Syntax</th>
                      <th>Returns</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.methods.map((method, idx) => (
                      <tr key={idx}>
                        <td
                          className="prop-name"
                          style={{ color: "var(--color-corona-green)" }}
                        >
                          {method.name}
                        </td>
                        <td
                          className="prop-type"
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "12px",
                          }}
                        >
                          {method.signature}
                        </td>
                        <td
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "12.5px",
                            color: "#ffffff",
                          }}
                        >
                          {method.returns || "void"}
                        </td>
                        <td style={{ color: "var(--color-corona-muted)" }}>
                          {method.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 6. Copyable Code Examples */}
          {item.codeExamples && item.codeExamples.length > 0 && (
            <div className="block-card-apple" style={{ margin: 0 }}>
              <h3
                className="block-title-apple"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Code
                  size={20}
                  style={{
                    color: stack.accentColor || "var(--color-corona-blue)",
                  }}
                />
                <span>Copyable Code Examples</span>
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginTop: "16px",
                }}
              >
                {item.codeExamples.map((ex, idx) => (
                  <CodeBlock
                    key={idx}
                    title={ex.title}
                    code={ex.code}
                    language={getExampleLanguage(stack.id, item, ex)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
