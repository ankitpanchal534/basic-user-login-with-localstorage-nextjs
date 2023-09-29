import "./globals.css";
import "../dist/output.css";

export const metadata = {
  title: "Basic Login",
  description: "Basic Login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="sweetalert2.all.min.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
