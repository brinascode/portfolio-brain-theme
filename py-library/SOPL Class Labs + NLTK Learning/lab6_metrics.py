'''
Given a system that predicts if text is a Person or Not. Answer the questions that follow.

System A prediction (Person predictions are in Blue / parentheses):
(Tom) and (Jerry) was the best cartoon on in (Paris). No (one) watched more than Joe and (Bob)

Correct Answer
(Tom) and (Jerry) was the best cartoon on in (Paris). No one watched more than (Joe) and (Bob)


Work:
TP: 4
TN:13
FP:1
FN:1



1. What is the accuracy of System A?

2. What is the precision of System A?


3. What is the recall of System A?


4. What is the F1-Measure of System A?


5. Which measure do you think represents the true value of the system, and why?

6. Bonus +4
Program a functions that calculates and displays all 4 metrics (accuracy,precision, recall,f-measure) .
The functions should accept TP,TN,FP,FN and spit out the results

'''

def calc_metrics(TP,TN,FP,FN):


    accuracy = (TP + TN) / (TP + TN + FP + FN)
    precision = (TP) / (TP + FP)
    recall = (TP) / (TP + FN)
    f_measure = 2*(recall * precision) / (recall + precision)

    print ("Accuracy: " + str(accuracy))
    print("Precision: " + str(precision))
    print("Recall: " + str(recall))
    print("F-measure: " + str(f_measure))


calc_metrics(4,13,1,1)