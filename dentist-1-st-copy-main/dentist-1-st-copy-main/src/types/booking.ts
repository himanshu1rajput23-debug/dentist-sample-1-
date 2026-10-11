export type HelpTopic =
  | 'Improve my smile'
  | 'Replace a missing tooth'
  | 'Straighten my teeth'
  | 'Check-up and clean'
  | 'Tooth pain'
  | 'Not sure yet';

export type BestTimeToCall = 'Morning' | 'Afternoon' | 'Evening';

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  helpTopic: HelpTopic | '';
  bestTimeToCall?: BestTimeToCall | '';
  notes?: string;
}

export interface BookingValidationErrors {
  fullName?: string;
  mobileNumber?: string;
  helpTopic?: string;
}

export interface ClinicConfig {
  phone: string;
  email: string;
  webhookUrl: string;
  simulateFailure: boolean;
}

export interface SubmissionRecord {
  id: string;
  timestamp: string;
  data: BookingFormData;
  emailSentTo: string;
  webhookSentTo: string;
  webhookStatus: 'success' | 'failed' | 'simulated';
  errorDetails?: string;
}
