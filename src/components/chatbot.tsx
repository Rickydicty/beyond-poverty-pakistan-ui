
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[80vh] max-w-[90vw] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Chat with Assistant</DialogTitle>
        </DialogHeader>
        <iframe
          src="https://multilingual-chatbot-three.vercel.app/"
          className="h-full w-full border-0"
          title="Chatbot"
        />
      </DialogContent>
    </Dialog>
  );
}
