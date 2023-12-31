import { useMemo } from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useTOCHighlight,
  useFilteredAndTreeifiedTOC,
  type TOCHighlightConfig,
} from "@docusaurus/theme-common/internal";
import TOCItemTree from "@theme/TOCItems/Tree";
import type { Props } from "@theme/TOCItems";

export default function TOCItems({
  toc,
  className = "ml-3 list-none pl-2 text-sm",
  linkClassName = "no-underline text-primary",
  linkActiveClassName = undefined,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}: Props): JSX.Element | null {
  const themeConfig = useThemeConfig();

  const minHeadingLevel =
    minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel =
    maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;

  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel,
  });

  const tocHighlightConfig: TOCHighlightConfig | undefined = useMemo(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel,
      };
    }
    return undefined;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);
  useTOCHighlight(tocHighlightConfig);

  return (
    <TOCItemTree
      toc={tocTree}
      className={className}
      linkClassName={linkClassName}
      {...props}
    />
  );
}
