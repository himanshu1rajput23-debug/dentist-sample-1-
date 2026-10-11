import React, { useState } from 'react';
import { X, Check, AlertTriangle } from 'lucide-react';
import { ClinicConfig } from '../types/booking';
import { saveClinicConfig, getSubmissions } from '../services/bookingService';

interface ClinicSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ClinicConfig;
  onUpdateConfig: (newConfig: ClinicConfig) => void;
}

export const ClinicSettingsModal: React.FC<ClinicSettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
}) => {
  const [phone, setPhone] = useState(config.phone);
  const [email, setEmail] = useState(config.email);
  const [webhookUrl, setWebhookUrl] = useState(config.webhookUrl);
  const [simulateFailure, setSimulateFailure] = useState(config.simulateFailure);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'destinations' | 'history'>('destinations');

  if (!isOpen) return null;

  const submissions = getSubmissions();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: ClinicConfig = {
      phone: phone.trim() || config.phone,
      email: email.trim() || config.email,
      webhookUrl: webhookUrl.trim(),
      simulateFailure,
    };
    saveClinicConfig(updated);
    onUpdateConfig(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111C2C]/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#111C2C]/10 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#111C2C]/10 bg-[#FFFFFF]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
            <h3 className="font-heading font-bold text-lg text-[#111C2C]">
              Clinic Lead Destinations &amp; Testing
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#111C2C]/60 hover:text-[#111C2C] hover:bg-[#2563EB]/[0.08] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#111C2C]/10 px-6 bg-[#2563EB]/[0.08] text-xs font-heading font-semibold">
          <button
            onClick={() => setActiveTab('destinations')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'destinations'
                ? 'border-[#2563EB] text-[#111C2C]'
                : 'border-transparent text-[#111C2C]/60 hover:text-[#111C2C]'
            }`}
          >
            Destinations &amp; Simulation
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'history'
                ? 'border-[#2563EB] text-[#111C2C]'
                : 'border-transparent text-[#111C2C]/60 hover:text-[#111C2C]'
            }`}
          >
            <span>Submission Activity</span>
            <span className="px-1.5 py-0.2 rounded-full bg-[#2563EB]/15 text-[#2563EB] text-[10px]">
              {submissions.length}
            </span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 font-sans">
          {activeTab === 'destinations' ? (
            <form onSubmit={handleSave} className="space-y-5">
              <p className="text-xs text-[#111C2C]/70">
                Configure your clinic destination values as requested in the specification. These variables power both the email notifications, webhook JSON payloads, and dynamic error messages.
              </p>

              {/* PHONE */}
              <div className="space-y-1.5">
                <label className="block text-xs font-heading font-bold text-[#111C2C] uppercase tracking-wider">
                  Clinic Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(02) 8319 2888"
                  className="w-full px-3.5 py-2 rounded-xl border border-[#111C2C]/15 text-sm font-sans text-[#111C2C] focus:outline-hidden focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                />
                <p className="text-[11px] text-[#111C2C]/70">
                  Used in failure fallback message: &ldquo;Please call us on phone and we will book you in.&rdquo;
                </p>
              </div>

              {/* CLINIC EMAIL */}
              <div className="space-y-1.5">
                <label className="block text-xs font-heading font-bold text-[#111C2C] uppercase tracking-wider">
                  Clinic Notification Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="consultations@apexdentalstudio.com.au"
                  className="w-full px-3.5 py-2 rounded-xl border border-[#111C2C]/15 text-sm font-sans text-[#111C2C] focus:outline-hidden focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                />
                <p className="text-[11px] text-[#111C2C]/70">
                  Every booking submission is dispatched to this email via the native email capability.
                </p>
              </div>

              {/* WEBHOOK URL */}
              <div className="space-y-1.5">
                <label className="block text-xs font-heading font-bold text-[#111C2C] uppercase tracking-wider">
                  CRM / Automation Webhook URL
                </label>
                <input
                  type="url"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  placeholder="https://hooks.zapier.com/hooks/catch/... or n8n webhook"
                  className="w-full px-3.5 py-2 rounded-xl border border-[#111C2C]/15 text-sm font-sans text-[#111C2C] focus:outline-hidden focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                />
                <p className="text-[11px] text-[#111C2C]/70">
                  POSTs data as JSON for Google Sheets, WhatsApp, Zapier, Make, or n8n workflows.
                </p>
              </div>

              {/* Simulate Failure Toggle */}
              <div className="p-4 rounded-xl border border-[#2563EB]/25 bg-[#2563EB]/[0.08] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#2563EB]" />
                    <span className="font-heading font-bold text-sm text-[#111C2C]">
                      Test Mode: Simulate Submission Failure
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    id="simFailure"
                    checked={simulateFailure}
                    onChange={(e) => setSimulateFailure(e.target.checked)}
                    className="w-4 h-4 rounded text-[#16A34A] focus:ring-[#16A34A] cursor-pointer"
                  />
                </div>
                <p className="text-xs text-[#111C2C]/70">
                  Check this box to test the requirement: &ldquo;if submission fails, show 'Something went wrong. Please call us on phone and we will book you in.'&rdquo;
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#111C2C]/10">
                {savedSuccess && (
                  <span className="text-xs text-[#111C2C] font-semibold flex items-center gap-1">
                    <Check className="w-4 h-4 text-[#16A34A]" /> Settings Saved!
                  </span>
                )}
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-sm hover:bg-[#15803d] active:bg-[#166534] cursor-pointer transition-colors"
                >
                  Save Settings
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs text-[#111C2C]/70">
                <span>Recent leads captured and dispatched</span>
                <span>{submissions.length} total records</span>
              </div>

              {submissions.length === 0 ? (
                <div className="p-8 text-center border border-dashed border-[#111C2C]/20 rounded-xl text-xs text-[#111C2C]/60">
                  No submissions recorded yet. Click &ldquo;Book Free Consultation&rdquo; on the page to submit a test booking!
                </div>
              ) : (
                <div className="space-y-3">
                  {submissions.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-3.5 rounded-xl border border-[#2563EB]/25 bg-[#FFFFFF] shadow-xs space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between font-heading font-bold text-[#111C2C]">
                        <span>{sub.data.fullName} &bull; {sub.data.mobileNumber}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                            sub.webhookStatus === 'success'
                              ? 'bg-[#16A34A] text-[#FFFFFF]'
                              : 'bg-[#111C2C] text-[#FFFFFF]'
                          }`}
                        >
                          {sub.webhookStatus}
                        </span>
                      </div>
                      <div className="text-[#111C2C]/70">
                        Topic: <strong className="text-[#111C2C]">{sub.data.helpTopic}</strong> &bull; Best Time: {sub.data.bestTimeToCall || 'Anytime'}
                      </div>
                      {sub.data.notes && (
                        <div className="text-[#111C2C]/70 italic">
                          Notes: &ldquo;{sub.data.notes}&rdquo;
                        </div>
                      )}
                      <div className="text-[10px] text-[#111C2C]/50 pt-1 border-t border-[#111C2C]/10 flex justify-between">
                        <span>Dispatched to {sub.emailSentTo}</span>
                        <span>{new Date(sub.timestamp).toLocaleTimeString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
