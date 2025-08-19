import React, { useMemo, useState } from "react";
import { Card, Table, Badge, Pagination } from "react-bootstrap";

/* ---------------- helpers ---------------- */
function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
}
function timeAgo(iso) {
  const d = new Date(iso);
  const diff = Math.floor((Date.now() - d.getTime()) / (24 * 60 * 60 * 1000));
  if (diff === 0) return "today";
  if (diff === 1) return "1 day ago";
  if (diff < 7) return `${diff} days ago`;
  const wk = Math.floor(diff / 7);
  return wk === 1 ? "1 week ago" : `${wk} weeks ago`;
}

/* --------------- demo data --------------- */
const ARTICLES = [
  { id: 1, title: "Modern React Patterns: Hooks, Context & Performance", status: "Published", edited: daysAgo(2) },
  { id: 2, title: "Operating Systems Essentials: Processes, Threads & Scheduling", status: "Draft", edited: daysAgo(6) },
  { id: 3, title: "React Native Navigation: Deep Links & Auth Flows", status: "Published", edited: daysAgo(12) },
  { id: 4, title: "Greedy vs Dynamic Programming: How to Decide in Contests", status: "Published", edited: daysAgo(18) },
  { id: 5, title: "Sliding Window & Two-Pointers: 10 Essential Problems", status: "Draft", edited: daysAgo(24) },
  { id: 6, title: "Shortest Paths: BFS vs Dijkstra vs Bellman-Ford", status: "Published", edited: daysAgo(30) },
];

const STATUS_TO_VARIANT = { Published: "success", Draft: "warning" };

/* --------------- component --------------- */
export default function MyArticles() {
  const [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const totalPages = Math.ceil(ARTICLES.length / PER_PAGE);

  const view = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return ARTICLES.slice(start, start + PER_PAGE);
  }, [page]);

  return (
    <>
      {/* make ONLY the card peach */}
      <Card className="card-lite card-peach table-wrapper">
        <Table hover responsive className="mb-0">
          <thead>
            <tr>
              <th style={{ width: "60%" }}>Title</th>
              <th>Status</th>
              <th>Last Edited</th>
            </tr>
          </thead>
          <tbody>
            {view.map((a) => (
              <tr key={a.id}>
                <td style={{ fontWeight: 700, color: "#0f172a" }}>{a.title}</td>
                <td>
                  <Badge pill bg={STATUS_TO_VARIANT[a.status] || "secondary"}>
                    {a.status}
                  </Badge>
                </td>
                <td className="text-muted">{timeAgo(a.edited)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* pagination stays outside the card, as in your screenshots */}
      <div className="pagination-wrap">
        <Pagination>
          <Pagination.Prev
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          />
          {Array.from({ length: totalPages }).map((_, i) => (
            <Pagination.Item
              key={i}
              active={page === i + 1}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          />
        </Pagination>
      </div>
    </>
  );
}
