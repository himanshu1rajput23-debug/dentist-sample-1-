import React, { useState, useEffect } from 'react';
import { X, Loader2, CheckCircle2, AlertCircle, PhoneCall } from 'lucide-react';
import { BookingFormData, BookingValidationErrors, HelpTopic, BestTimeToCall } from '../types/booking';
import { submitConsultationBooking, getClinicConfig } from '../services/bookingService';
import { LogoIcon } from './Logo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: HelpTopic | '';
}

const HELP_TOPICS: HelpTopic[] = [
  'Improve my smile',
  'Replace a missing tooth',
  'Straighten my teeth',
  'Check-up and clean',
  'Tooth pain',
  'Not sure yet',
];

const TIME_OPTIONS: BestTimeToCall[] = ['Morning', 'Afternoon', 'Evening'];

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialTopic }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    mobileNumber: '',
    helpTopic: initialTopic || '',
    bestTimeToCall: '',
    notes: '',
  });

  const [errors, setErrors] = useState<BookingValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const clinicConfig = getClinicConfig();

  // Reset when modal opens with new initial topic
  useEffect(() => {
    if (isOpen) {
      if (initialTopic) {
        setFormData((prev) => ({ ...prev, helpTopic: initialTopic }));
      }
      if (!isSuccess) {
        setErrorMessage(null);
      }
    }
  }, [isOpen, initialTopic]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isSubmitting]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: BookingValidationErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please type your name and a 10 digit phone number.';
    }

    const digitCount = formData.mobileNumber.replace(/\D/g, '').length;
    if (!formData.mobileNumber.trim() || digitCount < 10) {
      newErrors.mobileNumber = 'Please type your name and a 10 digit phone number.';
    }

    if (!formData.helpTopic) {
      newErrors.helpTopic = 'Please select what you would like help with';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitConsultationBooking(formData);
      setIsSuccess(true);
    } catch (err: any) {
      console.error('Consultation booking error:', err);
      setErrorMessage(`Something went wrong. Please call us on ${clinicConfig.phone} and we will book you in.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setErrorMessage(null);
      setErrors({});
      setFormData({
        fullName: '',
        mobileNumber: '',
        helpTopic: '',
        bestTimeToCall: '',
        notes: '',
      });
    }, 200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#111C2C]/75 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) {
          handleClose();
        }
      }}
    >
      <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#111C2C]/10 overflow-hidden transform transition-all my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#111C2C]/10 bg-[#FFFFFF]">
          <div className="flex items-center gap-3">
            <LogoIcon size={26} />
            <h2
              id="modal-headline"
              className="font-heading text-xl font-bold tracking-tight text-[#111C2C]"
            >
              {isSuccess ? 'Thank you!' : 'Book your free visit'}
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            disabled={isSubmitting}
            className="p-1.5 rounded-lg text-[#111C2C]/60 hover:text-[#111C2C] hover:bg-[#2563EB]/[0.08] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          {/* SUCCESS STATE: Replaces form with message on green 12% tint with a GREEN check icon */}
          {isSuccess ? (
            <div className="text-center py-6 px-4 space-y-5 bg-[#16A34A]/12 rounded-2xl border border-[#16A34A]/25 animate-in fade-in duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FFFFFF] shadow-sm flex items-center justify-center text-[#16A34A]">
                <CheckCircle2 className="w-10 h-10 text-[#16A34A]" />
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-bold text-[#111C2C]">
                  Thank you!
                </h3>
                {/* EXACT REQUIRED SUCCESS MESSAGE */}
                <p className="font-sans text-base sm:text-lg font-medium text-[#111C2C] leading-relaxed max-w-md mx-auto">
                  Thank you! We will call you in 2 hours when we are open.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#FFFFFF] rounded-xl p-4 text-left border border-[#16A34A]/20 space-y-2 text-sm text-[#111C2C]/80 font-sans shadow-xs">
                <div className="flex justify-between">
                  <span className="text-[#111C2C]/60">Your name:</span>
                  <span className="font-semibold text-[#111C2C]">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#111C2C]/60">Your phone number:</span>
                  <span className="font-semibold text-[#111C2C]">{formData.mobileNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#111C2C]/60">Help with:</span>
                  <span className="font-semibold text-[#111C2C]">{formData.helpTopic}</span>
                </div>
                {formData.bestTimeToCall && (
                  <div className="flex justify-between">
                    <span className="text-[#111C2C]/60">Best time to call:</span>
                    <span className="font-semibold text-[#111C2C]">{formData.bestTimeToCall}</span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-3.5 px-5 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[17px] hover:bg-[#15803d] active:bg-[#166534] transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* BOOKING FORM */
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <p className="font-sans text-sm text-[#111C2C]/70">
                Tell us a little. We will call you back.
              </p>

              {/* FAILURE HANDLING: Alert banner with text in --ink and --blue-deep icon */}
              {errorMessage && (
                <div className="p-4 rounded-xl bg-[#2563EB]/[0.08] border border-[#2563EB]/25 flex items-start gap-3 text-[#111C2C] animate-in fade-in duration-200">
                  <AlertCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div className="space-y-2 text-sm font-sans">
                    <p className="font-medium text-[#111C2C]">
                      {errorMessage}
                    </p>
                    <a
                      href={`tel:${clinicConfig.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 font-heading font-bold text-[#2563EB] hover:underline hover:decoration-[#2563EB] hover:decoration-2"
                    >
                      <PhoneCall className="w-4 h-4 text-[#2563EB]" />
                      Call {clinicConfig.phone} directly
                    </a>
                  </div>
                </div>
              )}

              {/* Field 1: Full Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="fullName"
                  className="block font-heading text-sm font-semibold text-[#111C2C]"
                >
                  Your name <span className="text-[#16A34A]">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder="Your name"
                  disabled={isSubmitting}
                  className={`w-full px-3.5 py-2.5 rounded-xl border font-sans text-sm text-[#111C2C] placeholder-[#111C2C]/40 bg-[#FFFFFF] transition-all focus:outline-hidden focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/25 ${
                    errors.fullName
                      ? 'border-[#2563EB] bg-[#2563EB]/[0.04]'
                      : 'border-[#111C2C]/10'
                  }`}
                />
                {/* Inline error: clear text with an icon in --ink */}
                {errors.fullName && (
                  <p className="text-xs font-sans font-medium text-[#111C2C] flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 text-[#111C2C] shrink-0" />
                    <span>Please type your name and a 10 digit phone number.</span>
                  </p>
                )}
              </div>

              {/* Field 2: Mobile Number (10 digits) */}
              <div className="space-y-1.5">
                <label
                  htmlFor="mobileNumber"
                  className="block font-heading text-sm font-semibold text-[#111C2C]"
                >
                  Your phone number <span className="text-[#16A34A]">*</span>
                </label>
                <input
                  id="mobileNumber"
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, mobileNumber: e.target.value });
                    if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: undefined });
                  }}
                  placeholder="10 digit phone number"
                  disabled={isSubmitting}
                  className={`w-full px-3.5 py-2.5 rounded-xl border font-sans text-sm text-[#111C2C] placeholder-[#111C2C]/40 bg-[#FFFFFF] transition-all focus:outline-hidden focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/25 ${
                    errors.mobileNumber
                      ? 'border-[#2563EB] bg-[#2563EB]/[0.04]'
                      : 'border-[#111C2C]/10'
                  }`}
                />
                {/* Inline error: clear text with an icon in --ink */}
                {errors.mobileNumber && (
                  <p className="text-xs font-sans font-medium text-[#111C2C] flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 text-[#111C2C] shrink-0" />
                    <span>Please type your name and a 10 digit phone number.</span>
                  </p>
                )}
              </div>

              {/* Field 3: What do you need help with? */}
              <div className="space-y-1.5">
                <label
                  htmlFor="helpTopic"
                  className="block font-heading text-sm font-semibold text-[#111C2C]"
                >
                  What do you need help with? <span className="text-[#16A34A]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="helpTopic"
                    value={formData.helpTopic}
                    onChange={(e) => {
                      setFormData({ ...formData, helpTopic: e.target.value as HelpTopic });
                      if (errors.helpTopic) setErrors({ ...errors, helpTopic: undefined });
                    }}
                    disabled={isSubmitting}
                    className={`w-full px-3.5 py-2.5 rounded-xl border font-sans text-sm text-[#111C2C] bg-[#FFFFFF] appearance-none cursor-pointer transition-all focus:outline-hidden focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/25 ${
                      errors.helpTopic
                        ? 'border-[#2563EB] bg-[#2563EB]/[0.04]'
                        : 'border-[#111C2C]/10'
                    }`}
                  >
                    <option value="" disabled>
                      Select an option...
                    </option>
                    <option value="A better smile">A better smile</option>
                    <option value="A missing tooth">A missing tooth</option>
                    <option value="Straighter teeth">Straighter teeth</option>
                    <option value="Check-up and clean">Check-up and clean</option>
                    <option value="Tooth pain">Tooth pain</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#111C2C]/60">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.helpTopic && (
                  <p className="text-xs font-sans font-medium text-[#111C2C] flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 text-[#111C2C] shrink-0" />
                    <span>{errors.helpTopic}</span>
                  </p>
                )}
              </div>

              {/* Field 4: Best time to call: Morning / Afternoon / Evening */}
              <div className="space-y-1.5">
                <label className="block font-heading text-sm font-semibold text-[#111C2C]">
                  Best time to call <span className="text-xs font-normal text-[#111C2C]/60">(optional)</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_OPTIONS.map((time) => {
                    const isSelected = formData.bestTimeToCall === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => {
                          setFormData({
                            ...formData,
                            bestTimeToCall: isSelected ? '' : time,
                          });
                        }}
                        className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#2563EB] text-[#FFFFFF] border-[#2563EB]'
                            : 'bg-[#FFFFFF] text-[#111C2C]/70 border-[#111C2C]/10 hover:border-[#2563EB]/40 hover:bg-[#2563EB]/[0.08]'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 5: Anything we should know? (optional) */}
              <div className="space-y-1.5">
                <label
                  htmlFor="notes"
                  className="block font-heading text-sm font-semibold text-[#111C2C]"
                >
                  Anything we should know? (optional)
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Example: I am scared of needles"
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#111C2C]/10 font-sans text-sm text-[#111C2C] placeholder-[#111C2C]/40 bg-[#FFFFFF] transition-all focus:outline-hidden focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/25 resize-none"
                />
              </div>

              {/* Submit Button & Small Line Under */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[17px] shadow-md hover:bg-[#15803d] active:bg-[#166534] transition-all disabled:bg-[#2563EB]/[0.08] disabled:text-[#111C2C]/50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-[#FFFFFF]" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send My Request</span>
                  )}
                </button>

                <p className="text-center font-sans text-xs text-[#111C2C]/70">
                  We only use your details to book your visit.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
