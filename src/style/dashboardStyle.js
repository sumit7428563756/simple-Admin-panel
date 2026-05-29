export const dashboardStyles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    overflow: "hidden",
    bgcolor: "#f5f7fb",
  },

  sidebar: {
    width: "260px",
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
    width: "100%",
    height: "60px",
    bgcolor: "#fff",
    display: "flex",
    alignItems: "center",
    px: 1,
    justifyContent: "space-between",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },

  pageContent: {
    p: 3,
  },

  card: {
    bgcolor: "#ffffff",
    borderRadius: "18px",
    p: 3,
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",

    "&:hover": {
      bgcolor: "#f8fafc",
      transform: "translateY(-6px) scale(1.02)",
      boxShadow: "0 20px 40px rgba(15, 23, 42, 0.15)",
    },
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
