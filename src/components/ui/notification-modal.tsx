import { For, Show, createEffect } from 'solid-js';

interface NotificationItem {
  id: number;
  status: 'success' | 'warning' | 'danger';
  title: string;
  message: string;
  time: string;
}

interface NotificationModalProps {
  open: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  anchorRef?: HTMLElement | null;
}

const statusColor = {
  success: 'bg-green-500',
  warning: 'bg-yellow-400',
  danger: 'bg-red-500',
};

export default function NotificationModal(props: NotificationModalProps) {
  let modalRef: HTMLDivElement | undefined;
  createEffect(() => {
    if (props.open && modalRef) {
      if (props.anchorRef) {
        const rect = props.anchorRef.getBoundingClientRect();
        Object.assign(modalRef.style, {
          position: 'absolute',
          top: `${rect.bottom + 24 + window.scrollY}px`,
          left: `${rect.right - 360}px`,
          zIndex: 9999,
        });
      } else {
        // fallback ke tengah layar
        Object.assign(modalRef.style, {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        });
      }
    }
  });
  return (
    <Show when={props.open}>
      <div style={{ position: 'fixed', inset: 0, 'z-index': 9998, background: 'transparent' }} onClick={props.onClose}></div>
      <div ref={modalRef} class="bg-white rounded-2xl shadow-2xl w-[360px] animate-fade-in-up relative border" style="min-width:320px;">
        <button class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold" onClick={props.onClose}>&times;</button>
        <div class="bg-blue-100 rounded-t-2xl px-6 py-4 border-b border-blue-200">
          <h2 class="text-lg font-bold text-gray-900">Notifications</h2>
          <p class="text-xs text-gray-600 mt-1">{props.notifications.length} new notifications</p>
        </div>
        <div class="divide-y divide-gray-100">
          <For each={props.notifications}>{notif => (
            <div class="flex items-start gap-3 px-6 py-4 bg-white">
              <div class={`w-3 h-3 mt-1 rounded-full ${statusColor[notif.status]}`}></div>
              <div class="flex-1">
                <div class="font-semibold text-gray-900 text-sm">{notif.title}</div>
                <div class="text-gray-600 text-xs">{notif.message}</div>
                <div class="text-gray-400 text-xs mt-1">{notif.time}</div>
              </div>
            </div>
          )}</For>
        </div>
      </div>
    </Show>
  );
} 