import 'package:DevQuiz/challenge/widgets/answer_widget.dart';
import 'package:DevQuiz/core/app_text_styles.dart';
import 'package:DevQuiz/shared/models/question_model.dart';
import 'package:flutter/material.dart';

class QuizWidget extends StatelessWidget {
  final QuestionModel question;
  const QuizWidget({Key? key, required this.question}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(height: 64),
          Text(question.title, style: AppTextStyles.heading),
          SizedBox(height: 24),
          ...question.answers.map((item) => AnswerWidget(
            title: item.title,
            isRight: item.isRight,
          )),
        ],
      ),
    );
  }
}
