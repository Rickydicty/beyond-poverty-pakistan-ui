
export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Created by{" "}
          <a
            href="https://rauf-psi.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Abdul Rauf Jatoi
          </a>{" "}
          | Idea by Qasim
        </p>
      </div>
    </footer>
  );
}
