import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { ListFilterPlus } from "lucide-react";

const keywords = [
  "Artificial Intelligence",
  "Machine Learning",
  "Natural Language Processing",
  "Deep Learning",
  "Quantum Computing",
  "Blockchain Technology",
  "Cybersecurity",
  "Cloud Computing",
  "Internet of Things (IoT)",
  "Human-Computer Interaction (HCI)",
  "Augmented Reality (AR)",
  "Virtual Reality (VR)",
  "Big Data Analytics",
  "Edge Computing",
  "Software Engineering",
];

function BrowsePaper() {
  return (
    <>
      <section className="w-1/5">
        <Card className="h-80 p-2">
          <div className="flex items-center gap-1.5">
            <ListFilterPlus className="text-emerald-500" />
            <p className="text-lg font-medium">Filter</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg">Category</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Computer Science" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>All Categories</SelectLabel>
                  <SelectItem value="computer_science">
                    Computer Science
                  </SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="economics">Economics</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p>Keywords</p>
            <ScrollArea>
              <ul>
                {keywords.map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        </Card>
      </section>
      <section className="w-4/5"></section>
    </>
  );
}

export default BrowsePaper;
