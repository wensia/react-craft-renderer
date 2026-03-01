/**
 * react-craft-renderer — Rich Markdown rendering for React
 *
 * Features:
 * - GFM Markdown with syntax highlighting (Shiki)
 * - 7 special code block types: datatable, spreadsheet, mermaid, diff, json, html-preview, pdf-preview
 * - Pure-TS Mermaid engine (flowchart, sequence, class, ER diagrams)
 * - Fullscreen overlay system for code, images, PDFs, diffs, data tables
 * - Tailwind CSS 4 theming with light/dark mode
 * - Platform-agnostic via context injection
 */

// ─── Markdown ────────────────────────────────────────────────
export {
  Markdown,
  MemoizedMarkdown,
  type MarkdownProps,
  type RenderMode,
} from './markdown/Markdown'

export {
  CodeBlock,
  InlineCode,
  type CodeBlockProps,
} from './markdown/CodeBlock'

export {
  preprocessLinks,
  detectLinks,
  hasLinks,
} from './markdown/linkify'

export { CollapsibleSection } from './markdown/CollapsibleSection'

export {
  CollapsibleMarkdownProvider,
  useCollapsibleMarkdown,
} from './markdown/CollapsibleMarkdownContext'

export {
  MarkdownDatatableBlock,
  type MarkdownDatatableBlockProps,
} from './markdown/MarkdownDatatableBlock'

export {
  MarkdownSpreadsheetBlock,
  type MarkdownSpreadsheetBlockProps,
} from './markdown/MarkdownSpreadsheetBlock'

// ─── Mermaid ─────────────────────────────────────────────────
export {
  renderMermaid,
  renderMermaidSync,
} from './mermaid/index'

export type {
  RenderOptions,
  MermaidGraph,
  PositionedGraph,
} from './mermaid/types'

export type {
  DiagramColors,
  ThemeName,
} from './mermaid/theme'

export {
  fromShikiTheme,
  THEMES,
  DEFAULTS,
} from './mermaid/theme'

export { renderMermaidAscii } from './mermaid/ascii/index'
export type { AsciiRenderOptions } from './mermaid/ascii/index'

// ─── Overlay System ──────────────────────────────────────────
export {
  FullscreenOverlayBase,
  type FullscreenOverlayBaseProps,
} from './overlay/FullscreenOverlayBase'

export {
  FullscreenOverlayBaseHeader,
  type FullscreenOverlayBaseHeaderProps,
  type OverlayTypeBadge,
} from './overlay/FullscreenOverlayBaseHeader'

export {
  PreviewOverlay,
  type PreviewOverlayProps,
  type BadgeVariant,
} from './overlay/PreviewOverlay'

export {
  ContentFrame,
  type ContentFrameProps,
} from './overlay/ContentFrame'

export {
  CopyButton,
  type CopyButtonProps,
} from './overlay/CopyButton'

export {
  OverlayErrorBanner,
  type OverlayErrorBannerProps,
} from './overlay/OverlayErrorBanner'

export {
  CodePreviewOverlay,
  type CodePreviewOverlayProps,
} from './overlay/CodePreviewOverlay'

export {
  MultiDiffPreviewOverlay,
  type MultiDiffPreviewOverlayProps,
  type FileChange,
  type DiffViewerSettings,
} from './overlay/MultiDiffPreviewOverlay'

export {
  TerminalPreviewOverlay,
  type TerminalPreviewOverlayProps,
} from './overlay/TerminalPreviewOverlay'

export {
  GenericOverlay,
  detectLanguage,
  detectLanguageFromPath,
  type GenericOverlayProps,
} from './overlay/GenericOverlay'

export {
  JSONPreviewOverlay,
  type JSONPreviewOverlayProps,
} from './overlay/JSONPreviewOverlay'

export {
  DataTableOverlay,
  type DataTableOverlayProps,
} from './overlay/DataTableOverlay'

export {
  DocumentFormattedMarkdownOverlay,
  type DocumentFormattedMarkdownOverlayProps,
} from './overlay/DocumentFormattedMarkdownOverlay'

export {
  ImagePreviewOverlay,
  type ImagePreviewOverlayProps,
} from './overlay/ImagePreviewOverlay'

export {
  PDFPreviewOverlay,
  configurePdfWorker,
  type PDFPreviewOverlayProps,
} from './overlay/PDFPreviewOverlay'

export {
  MermaidPreviewOverlay,
  type MermaidPreviewOverlayProps,
} from './overlay/MermaidPreviewOverlay'

// ─── Context Providers ───────────────────────────────────────
export {
  PlatformProvider,
  usePlatform,
  type PlatformActions,
  type PlatformProviderProps,
} from './context/PlatformContext'

export {
  ShikiThemeProvider,
  useShikiTheme,
  type ShikiThemeProviderProps,
} from './context/ShikiThemeContext'

// ─── UI Components ───────────────────────────────────────────
export { PreviewHeader } from './ui/PreviewHeader'
export * from './ui/StyledDropdown'

// ─── Utilities ───────────────────────────────────────────────
export { cn } from './utils'
