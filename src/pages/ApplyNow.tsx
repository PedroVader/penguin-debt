import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ApplyNow = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-card rounded-2xl p-8 shadow-hover">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Apply for Debt Relief
          </h1>
          <p className="text-text-secondary">
            This page will contain the lead form. For now, this is a placeholder to demonstrate the navigation flow.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="p-4 bg-surface rounded-lg border border-border-subtle">
            <div className="text-sm text-text-muted mb-1">Next Step:</div>
            <div className="font-medium text-text-primary">Complete Assessment Form</div>
          </div>
          
          <div className="p-4 bg-surface rounded-lg border border-border-subtle opacity-60">
            <div className="text-sm text-text-muted mb-1">Then:</div>
            <div className="font-medium text-text-primary">Get Matched with Specialists</div>
          </div>
          
          <div className="p-4 bg-surface rounded-lg border border-border-subtle opacity-40">
            <div className="text-sm text-text-muted mb-1">Finally:</div>
            <div className="font-medium text-text-primary">Start Your Debt Relief Plan</div>
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-conversion-blue hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ApplyNow;