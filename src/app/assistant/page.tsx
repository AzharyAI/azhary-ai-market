import { AssistantChat } from "@/components/AssistantChat";

export default function AssistantPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-emerald-950">المساعد الذكي</h1>
        <p className="mt-1 text-sm leading-7 text-stone-500">
          يرشّح من كتالوج السوق فقط، ولا يخترع منتجات أو أسعاراً. هذه نسخة تجريبية تعمل على الجهاز بدون خادم ذكاء اصطناعي.
        </p>
      </div>
      <AssistantChat />
    </div>
  );
}
