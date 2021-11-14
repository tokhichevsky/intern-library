import cn from "classnames";
import { ArrowLeft, ArrowRight } from "../Icons";
import { TPaginationProps } from "components/Pagination/Pagination.type";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import IconButton from "../IconButton";
import styles from "./Pagination.module.scss";

const Pagination: FC<TPaginationProps> = (props: TPaginationProps) => {
  const { value, className, maxVisiblePages, totalPages, onChange, style } = props;
  const [page, setPage] = useState(value || 0);
  const visiblePagesCount = useMemo(
    () => maxVisiblePages && maxVisiblePages > 0
      ? Math.min(maxVisiblePages, totalPages)
      : totalPages,
    [maxVisiblePages, totalPages]
  );

  const pagesArray = useMemo(() => Array(visiblePagesCount).fill(null), [visiblePagesCount]);
  const getChangeHandler = useCallback((pageIndex: number) => () => {
    onChange?.(pageIndex);
    setPage(pageIndex);
  }, []);

  useEffect(() => {
    value !== undefined && setPage(value);
  }, [value]);

  const getPageIndex = useCallback((pageIndex: number) => {
    if (!maxVisiblePages) {
      return pageIndex;
    }

    return pageIndex + Math.floor(page/maxVisiblePages) * maxVisiblePages;
  }, [maxVisiblePages, page]);

  const renderPage = useCallback((index: number) => {
    const globalIndex = getPageIndex(index);
    const isVisible = globalIndex <= totalPages - 1;

    return (
      <div
        key={globalIndex}
        className={cn(styles.page, {[styles.page_active]: page === globalIndex})}
        onClick={isVisible ? getChangeHandler(globalIndex) : undefined}
        style={{ visibility: isVisible ? "visible" : "hidden"}}
      >
        <div className={styles.dot}/>
      </div>
    )
  }, [totalPages, getPageIndex, totalPages, page, getChangeHandler])

  return (
    <div className={cn(styles.root, className)} style={style}>
      <IconButton disabled={page === 0} onClick={getChangeHandler(page - 1)}><ArrowLeft/></IconButton>
      {pagesArray.map((_, index) => renderPage(index))}
      <IconButton disabled={page === totalPages - 1} onClick={getChangeHandler(page + 1)}><ArrowRight/></IconButton>
    </div>
  );
};

export default Pagination;
