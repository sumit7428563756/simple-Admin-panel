
export const dashboardStyles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    bgcolor: "#f5f7fb",
  },

  sidebar: {
    width: "250px",
    bgcolor: "#1e293b",
    color: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
  },

  content: {
    flex: 1,
    ml: "250px",
  },

  navbar: {
    height: "60px",
    bgcolor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 3,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  pageContent: {
    p: 3,
  },

  card: {
    bgcolor: "#fff",
    borderRadius: 2,
    p: 2,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },

  cardTitle: {
    color: "#64748b",
    fontSize: "14px",
  },

  cardValue: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#1e293b",
  },
};